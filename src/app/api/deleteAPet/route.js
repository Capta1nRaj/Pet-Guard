import { NextResponse } from "next/server";
import { connect2MongoDB } from "connect2mongodb";
import petsList from "@/models/petsList.mjs";

export async function POST(request) {

    const data = await request.json();

    await connect2MongoDB();

    const id = data.id

    const response = await petsList.findByIdAndDelete(id);

    return NextResponse.json(
        {
            status: true,
            message: "Pet Added.",
            response
        }
    );
}