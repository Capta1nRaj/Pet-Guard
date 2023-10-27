import { NextResponse } from "next/server";
import { connect2MongoDB } from "connect2mongodb";
import petsList from "@/models/petsList.mjs";

export async function POST(request) {

    const data = await request.json();

    console.log(data)
    await connect2MongoDB();

    const id = data.id || data._id;
    const yourName = data.yourName;
    const petName = data.petName;
    const petType = data.petType;
    const petBreed = data.petBreed;
    const petVaccine = data.vaccineType;
    const vaccinated = data.isVaccinated;
    const petProfile = data.imageLink ? data.imageLink[0] : null;

    if (id === undefined || id === null || id.length === 0) {

        const response = await new petsList({ yourName, petName, petType, petBreed, petVaccine, petProfile }).save()

        return NextResponse.json(
            {
                status: true,
                message: "Pet Added.",
                response
            }
        );

    } else {

        const response = await petsList.findOneAndUpdate({ _id: id }, { yourName, petName, petType, petBreed, vaccinated });

        return NextResponse.json(
            {
                status: true,
                message: "Pet Updated.",
                response
            }
        );
    }
}