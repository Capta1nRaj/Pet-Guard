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

  const [userName, setuserName] = useState('')
  const [userPassword, setuserPassword] = useState('')

  const [loginMessage, setloginMessage] = useState('')

  const onSubmitClicked = async (ev) => {
    ev.preventDefault();
    const data = { userName, userPassword };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/signIn`, data)
    if (response.data.response.status === 201) {
      setloginMessage(response.data.response.message)
      console.log(response.data.response)
      setCookie('userName', response.data.response.userName)
      setCookie('token', response.data.response.token)
      setCookie('id', response.data.response.id)
      router.push(`/signInVerify`);
      return;
    } else if (response.data.response.status === 401) {
      setloginMessage(response.data.response.message)
      console.log(response.data.response)
      setCookie('userName', response.data.response.userName)
      setCookie('token', response.data.response.token)
      setCookie('id', response.data.response.id)
      router.push(`/signUpVerify`);
      return;
    } else {
      setloginMessage(response.data.response.message)
      console.log(response.data.response.message)
      console.log("Error In signIn Page.")
      return;
    }
  }

  return (
    <form className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <div className="bg-white rounded p-8">
          <div className="text-slate-700 mb-5 text-center">
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <p className="text-gray-400">Sign {isLogin ? 'In' : "Up"} to your account</p>
          </div>

          <div className="flex justify-center">
            <div>
              <p className="text-violet-950 text-sm">Username:</p>
              <input value={userName} onChange={ev => setuserName(ev.target.value)} required placeholder="Username" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <p className="text-violet-950 text-sm">Password:</p>
              <input value={userPassword} onChange={ev => setuserPassword(ev.target.value)} required type="password" placeholder="Password" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
            </div>
          </div>

          <div className="items-center flex text-[0.94rem] leading-5 justify-center mb-3">

            <Link href={'/signup'} className="items-center flex justify-between">
              {<div className="text-violet-950 cursor-pointer hover:underline">{isLogin ? 'Dont have an account? Register!' : 'Already have an account? Login!'}</div>}
            </Link>
          </div>
          <div className="text-red-500 text-center mb-4">{loginMessage}</div>
          <div className="flex justify-center flex-col items-center">
            <div onClick={ev => onSubmitClicked(ev)} className="cursor-pointer flex items-center bg-lime-500 text-white justify-center text-[1.06rem] leading-6 font-medium h-11 text-center w-64 rounded">{isLogin ? 'Login' : 'Register'} <i className="inline-block"></i></div>
          </div>
        </div>
      </div>
    </form>
  )
}