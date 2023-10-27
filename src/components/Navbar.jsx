"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie, setCookie } from 'cookies-next'
import sessionCheck from "@/app/sessionCheck";
import axios from "axios";

export function Navbar() {


  const userName = getCookie('userName')
  const userToken = getCookie('token')
  const userId = getCookie('id')

  const pathname = usePathname()

  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  async function checkSession() {

    const data = { userName, userToken, userId }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/sessionCheck`, data)
    console.log(response.data)
    if (response.data.status === 202) {
      setIsLoggedIn(true)
      router.push(pathname);
      return;
    } else if (pathname === "/login" || pathname === "/signup" || pathname === "/signUpVerify" || pathname === "/signInVerify" || pathname === "/first-aid") {
      router.push(pathname);
      return;
    } else {
      console.log(pathname)
      router.push(`${process.env.NEXT_PUBLIC_DOMAIN_2}`);
      return;
    }

  }

  useEffect(() => {
    checkSession();
  }, []);


  async function logoutOnce() {

    const data = { userName, userToken, userId }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/logoutOnce`, data)

    if (response.data.response.status = 200) {
      console.log(response.data.response.message)
      router.push('/')
      return;
    }
    console.log(response.data.response.message)
    return;

  }

  return (
    <div className="top-0 z-10">
      <div className="items-center bg-white text-stone-500 flex justify-start">
        <Link href="/" className="text-black cursor-pointer text-xl ml-12 mr-4 py-1">
          <h1 className="text-neutral-800 text-[2.50rem] leading-none font-bold uppercase flex items-center gap-1"><Image src="/img/logo.png" alt="logo" width={60} height={60} />PetGuard</h1>
        </Link>

        <div className="items-center flex grow">
          <div className='flex grow'>
            <Link href="/" className={`${pathname == "/" ? 'text-lime-500' : 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>Home</Link>
            <Link href="/first-aid" className={`${pathname == "/first-aid" ? 'text-lime-500' : 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>First Aid</Link>
            {isLoggedIn ? <Link href="/profile" className={`${pathname == "/profile" ? 'text-lime-500' : 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>Proflie</Link> : ""}
            {isLoggedIn ? <Link href="/track-vaccine" className={`${pathname == "/track-vaccine" ? 'text-lime-500' : 'text-neutral-800'} cursor-pointer text-lg font-bold ml-8 py-8 uppercase`}>Track Vaccine</Link> : ""}
          </div>
          {isLoggedIn ?
            <div onClick={ev => logoutOnce()} className={`bg-lime-500 text-white cursor-pointer text-lg font-bold ml-12 py-8 px-12 uppercase`}>Logout <i></i></div>
            : <Link href="/login" className={`${pathname != "/login" ? 'cursor-pointer text-lime-500 bg-white' : 'bg-lime-500 text-white'} cursor-pointer text-lg font-bold ml-12 py-8 px-12 uppercase`}>Login <i></i></Link>}
        </div>
      </div>
    </div>
  )
};