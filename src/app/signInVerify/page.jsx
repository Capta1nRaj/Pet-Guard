'use client'

import React, { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import sessionCheck from '../sessionCheck';

const SignUpVerify = () => {

    const pathname = usePathname()

    const userId = getCookie('id');

    const router = useRouter();

    const userName = getCookie('userName')

    const [userOTP, setuserOTP] = useState('')

    const [showMessage, setshowMessage] = useState('')

    const signUpVerify = async () => {
        const data = { userName, userOTP, userId };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/signInVerify`, data)
        if (response.data.response.status === 202) {
            setshowMessage(response.data.response.message)
            setTimeout(() => {
                router.push(`/`);
            }, 2000);
            return;;
        } else {
            setshowMessage(response.data.response.message)
            return;;
        }
    };

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-4">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="font-semibold text-3xl">
                                <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row font-medium text-gray-400 text-2xl">
                                <p>We have sent a code to your email.</p>
                            </div>
                        </div>

                        <div>
                            <form action="" method="post">
                                <div className="flex flex-col space-y-4">

                                    <input value={userOTP} onChange={(e) => setuserOTP(e.target.value)} className='border border-blue-600 text-2xl text-black py-8 text-center' type="text" />
                                    <div className='text-center text-red-500'>{showMessage}</div>
                                    <div className="flex flex-col">
                                        <div>
                                            <div onClick={signUpVerify} className="cursor-pointer flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                Verify Account
                                            </div>
                                        </div>

                                        {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn`t recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                        </div> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpVerify