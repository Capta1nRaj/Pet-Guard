import { NextResponse } from "next/server";
import { connect2MongoDB } from "connect2mongodb";
import sessionsModel from "@/models/sessionsModel.js";

export async function POST(request) {

    try {

        const data = await request.json()

        //* If Any Cookie Value Not Found, Stop
        if (!data.userId || !data.userToken || !data.userName) {
            return NextResponse.json(
                {
                    message: `No Session Found.`,
                    status: 400
                }
            );
        }

        // Checking If data.userName, Token, & id Is Passed By Client Or Not
        if (data.userName === undefined || data.userToken === undefined || data.userId === undefined || data.userName.length === 0 || data.userToken.length === 0) {
            return {
                status: 204,
                message: "Please Provide data.Username, Token, & Id",
            };
        }


        await connect2MongoDB();

        // Find User Session Using ID
        const findSessionUsingdata = await sessionsModel.findById(data.userId)

        // If No Session Exist In DB, Client Will Receive This Response
        if (findSessionUsingdata === null) {

            return NextResponse.json(
                {
                    status: 400,
                    message: "Session doesn't exist.",
                }
            );

        }

        if (findSessionUsingdata.userName === data.userName && findSessionUsingdata.token === data.userToken && findSessionUsingdata.userVerified === true) {

            return NextResponse.json(
                {
                    status: 202,
                    message: "Session exists.",
                    userName: data.userName
                }
            );

        } else {

            return NextResponse.json(
                {
                    message: `No Session Found.`,
                    status: 400
                }
            );

        }
    } catch (error) {
        return NextResponse.json(
            {
                message: `No Session Found.`,
                status: 400
            }
        );
    }
}