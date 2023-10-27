"use client"

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { getCookie, setCookie } from 'cookies-next'
import { useRouter, usePathname } from 'next/navigation';
import axios from "axios";
import sessionCheck from "../sessionCheck";

export default function Profile() {

    const pathname = usePathname();

    const router = useRouter();
    const [type, setType] = useState("");
    const profileRef = useRef(null);

    const [vaccineList, setVaccineList] = useState([]);
    async function fetchVaccineNames() {
        const response = await axios.get('/api/getVaccineList');
        setVaccineList(response.data.response);
    }

    useEffect(() => {
        fetchVaccineNames();
    }, []);

    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petType, setPetType] = useState('');
    const [vaccineType, setVaccineType] = useState([]);
    const [petStatus, setPetStatus] = useState('');

    // Function to handle changes in selected vaccines
    const handleVaccineSelection = (event, vaccineName) => {
        const selectedVaccines = [...vaccineType];

        if (event.target.checked) {
            selectedVaccines.push(vaccineName);
        } else {
            const index = selectedVaccines.indexOf(vaccineName);
            if (index > -1) {
                selectedVaccines.splice(index, 1);
            }
        }

        setVaccineType(selectedVaccines);
    }

    const [profileUrl, setProfileUrl] = useState(null);
    const onFileUrlChanged = (ev) => {
        if (ev.target.files && ev.target.files[0]) {
            setProfileUrl(ev.target.files[0]);
        }
    }

    // Function to save the pet profile and upload the image
    async function saveThePetProfile() {
        // Upload the selected image to AWS S3
        const imageLink = await uploadImageToAWS(profileUrl);

        const yourName = getCookie('userName');
        const data = { yourName, petName, petBreed, petType, vaccineType, petStatus, imageLink };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/addAPet`, data);
        console.log(response.data.response);
        setPetName('');
        setPetBreed('');
        setPetType('');
        setVaccineType([]);
        setPetStatus('');
        setProfileUrl(null)
        setType("");
        setVaccineList([]);
        fetchVaccineNames();
    }

    async function uploadImageToAWS() {
        const formData = new FormData();
        if (profileUrl === null) {
            return "";
        }
        // Check if profileUrl is an array (e.g., multiple files) or a single file
        if (Array.isArray(profileUrl)) {
            // Iterate through the array of files and append each to formData
            profileUrl.forEach((imageData, index) => {
                formData.append(`image_${index}`, imageData);
            });
        } else if (profileUrl) {
            // If profileUrl is not an array, assume it's a single file and append it to formData
            formData.append('image_0', profileUrl);
        } else {
            // Handle the case when profileUrl is undefined or null
            console.error('No image selected for upload.');
            return null;
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/addAPet/uploadImages`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data.uploadedImageUrls;
    }

    const isSaveButtonDisabled = !(petName && petBreed && petType && vaccineType.length > 0);

    return (
        <form className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="grow">
                <div className="bg-white rounded p-8">
                    <div className="text-slate-700 mb-5 text-center">
                        <h2 className="text-5xl font-bold">Pet Profile</h2>
                    </div>
                    <div className="flex justify-center items-center flex-col md:flex-row md:gap-12 gap-3">
                        <div className="flex justify-center my-10">
                            <div>
                                <div className="rounded-full relative h-64 w-64 cursor-pointer" onClick={ev => { profileRef.current.click() }}>
                                    <Image src={profileUrl ? URL.createObjectURL(profileUrl) : (profileUrl?.length > 0 ? profileUrl : '/img/hero.jpg')} alt="img" fill className="rounded-full" />
                                    <Image src="/img/pen.png" width={50} height={50} className="rounded-full bg-white absolute bottom-0 right-10 border border-gray-400 p-2" alt="" />
                                </div>
                                <input type="file" ref={profileRef} onChange={ev => onFileUrlChanged(ev)} className="hidden bg-zinc-100 text-zinc-500 cursor-text text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-violet-950 text-sm">Name:</p>
                                    <input value={petName} onChange={(e) => setPetName(e.target.value)} required placeholder="Name" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div>
                                    <p className="text-violet-950 text-sm">Breed:</p>
                                    <input value={petBreed} onChange={(e) => setPetBreed(e.target.value)} required placeholder="Breed" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div>
                                    <p className="text-violet-950 text-sm">Type:</p>
                                    <select onChange={ev => {
                                        setPetType(ev.target.value);
                                        setType(ev.target.value);
                                    }} required defaultValue="" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3">
                                        <option value="" disabled>
                                            --Choose an option--
                                        </option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="cow">Cow</option>
                                        <option value="horse">Horse</option>
                                        <option value="goat">Goat</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-[calc(100vw-50px)] w-[536px]">
                        {type.length > 0 ?
                            <div className="mb-5">
                                <p className="text-violet-950 text-sm mb-3">Vaccination:</p>
                                {vaccineList.filter(vaccine => vaccine.type === type).map((vaccine, index) => (
                                    <div key={index} className="flex jusity-center items-center gap-3 mb-1.5">
                                        <input
                                            type="checkbox"
                                            onChange={(event) => handleVaccineSelection(event, vaccine.vaccineName)}
                                        />
                                        <div>
                                            <h1 className="text-sm text-black font-semibold">{vaccine.vaccineName}</h1>
                                            {/* You can display additional information about the vaccine here if needed */}
                                        </div>
                                    </div>
                                ))}
                            </div> : ""}
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p className="text-violet-950 text-sm">Status:</p>
                            <textarea value={petStatus} onChange={(e) => setPetStatus(e.target.value)} required placeholder="Status" className="max-w-[calc(100vw-50px)] w-[536px] h-[200px] bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 mb-5 rounded p-3" />
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <div onClick={saveThePetProfile} className={`cursor-pointer flex justify-center items-center bg-lime-500 text-white text-[1.06rem] leading-6 font-medium h-11 text-center w-64 rounded ${isSaveButtonDisabled ? 'bg-gray-300 cursor-not-allowed' : ''}`}>Save<i className="inline-block"></i></div>
                    </div>
                </div>
            </div>
        </form>
    )
}
