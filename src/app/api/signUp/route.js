import { NextResponse } from "next/server";
import { signup } from "mail-passify"

export async function POST(request) {

    const data = await request.json();
    console.log(data);
    const response = await signup(data.userFullName, data.userName, data.userEmail, data.userPassword, data.userReferredBy)

    return NextResponse.json(
        {
            response
        }
    );
}