import { NextResponse } from "next/server";
import { connect2MongoDB } from "connect2mongodb";
import vaccineList from "@/models/vaccineList.mjs";

export async function GET(request) {

    await connect2MongoDB();

    const response = await vaccineList.find({})

    return NextResponse.json(
        {
            status: true,
            response
        }
    );

}

export async function POST(request) {


    return NextResponse.json(
        {
            status: true,
        }
    );

}