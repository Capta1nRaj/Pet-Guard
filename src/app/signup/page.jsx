"use client"

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useRouter, usePathname } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next'
import axios from "axios";
import Link from "next/link";
import sessionCheck from "../sessionCheck";

export default function Login() {

  const pathname = usePathname()

  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [userFullName, setuserFullName] = useState('')
  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userPassword, setuserPassword] = useState('')
  const [showErrorMessage, setshowErrorMessage] = useState('')

  async function signUp() {
    const userReferredBy = ""
    const data = { userFullName, userName, userEmail, userPassword, userReferredBy }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/signUp`, data)
    console.log(response.data.response)
    if (response.data.response.status === 201) {
      setshowErrorMessage(response.data.response.message)
      router.push(`/signUpVerify`);
      setCookie('userName', data.userName)
    } else {
      setshowErrorMessage(response.data.response.message)
    }
  }

  return (
    <form className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <div className="bg-white rounded p-8">
          <div className="text-slate-700 mb-5 text-center">
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <p className="text-gray-400">Sign Up to your account</p>
          </div>

          <div className="flex justify-center">
            <div>
              <p className="text-violet-950 text-sm">Full Name:</p>
              <input value={userFullName} onChange={ev => setuserFullName(ev.target.value)} required type="name" placeholder="Fullname" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <p className="text-violet-950 text-sm">Username:</p>
              <input value={userName} onChange={ev => setuserName(ev.target.value)} required type="name" placeholder="Username" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <p className="text-violet-950 text-sm">E-Mail:</p>
              <input value={userEmail} onChange={ev => setuserEmail(ev.target.value)} required type="email" placeholder="E-Mail" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <p className="text-violet-950 text-sm">Password:</p>
              <input value={userPassword} onChange={ev => setuserPassword(ev.target.value)} required type="password" placeholder="Password" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
            </div>
          </div>

          <div className="items-center flex text-[0.94rem] leading-5 justify-center mb-3">

            <Link href={'/login'} className="items-center flex justify-between">
              {<div className="text-violet-950 cursor-pointer hover:underline">Already have an account? Login!</div>}
            </Link>
          </div>
          <div className='text-center text-red-500 mb-4'>{showErrorMessage}</div>
          <div className="flex justify-center flex-col items-center">
            <div onClick={signUp} className="cursor-pointer flex items-center justify-center bg-lime-500 text-white text-[1.06rem] leading-6 font-medium h-11 text-center w-64 rounded">Register<i className="inline-block"></i></div>
          </div>
        </div>
      </div>
    </form>
  )
}