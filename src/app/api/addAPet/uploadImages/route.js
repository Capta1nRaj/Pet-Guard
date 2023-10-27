import { NextResponse } from "next/server";
import { connect2MongoDB } from 'connect2mongodb';
import moment from 'moment';

// AWS Setup
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const s3Client = new S3Client({
    credentials: {
        secretAccessKey: process.env.ACCESS_SECRET,
        accessKeyId: process.env.ACCESS_KEY,
    },
    region: process.env.REGION,
});

async function uploadBlobToS3(buffer, bucketName, key) {
    const params = {
        Bucket: bucketName,
        Key: key,
        Body: buffer,
    };

    try {
        const command = new PutObjectCommand(params);
        const data = await s3Client.send(command);
        const fileLink = `https://${bucketName}.s3.ap-south-1.amazonaws.com/${key}`
        return fileLink;
    } catch (error) {
        throw error;
    }
}


// This route fetches the certificate Metadata
export async function POST(request) {

    await connect2MongoDB();

    let data = await request.formData();

    const uploadedImageUrls = [];

    for (let entry of data.entries()) {
        const fieldName = entry[1];
        const fileName = fieldName.name;
        const blob = fieldName;
        const bucketName = process.env.BUCKET;

        let extension;
        if (fieldName.type === 'image/jpeg') {
            extension = 'jpeg'
        } else if (fieldName.type === 'image/jfif') {
            extension = 'jfif'
        } else if (fieldName.type === 'image/pjpeg') {
            extension = 'pjpeg'
        } else if (fieldName.type === 'image/png') {
            extension = 'png'
        } else if (fieldName.type === 'image/jpg') {
            extension = 'jpg'
        } else {
            return NextResponse.json(
                { message: "Wrong File Extension.", response: false },
                { status: 200 }
            );
        }

        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const currentDateTime = moment().format('DD-MM-YY-HH-mm-ss');
        const key = `petguard-images/${currentDateTime}-${fileName}-${randomNumber}.${extension}`;

        // Converting The Blob To A Buffer
        const buffer = Buffer.from(await blob.arrayBuffer());

        const imageUrl = await uploadBlobToS3(buffer, bucketName, key);
        uploadedImageUrls.push(imageUrl);
    }

    return NextResponse.json(
        { message: "Pic Updated", response: true, uploadedImageUrls },
        { status: 200 }
    );
}
