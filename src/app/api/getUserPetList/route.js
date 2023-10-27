import { NextResponse } from "next/server";
import { connect2MongoDB } from "connect2mongodb";
import petsList from "@/models/petsList.mjs";

export async function POST(request) {

    const data = await request.json();

    await connect2MongoDB();

    const yourName = data.yourName;

    const response = await petsList.find({ yourName })

    return NextResponse.json(
        {
            status: true,
            response
        }
    );

}