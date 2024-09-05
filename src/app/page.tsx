"use client"

import Image from 'next/image'
import {redirect, useRouter} from "next/navigation";


const Page = () => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center bg-[url(/grid.png)] bg-cover bg-center h-screen w-full">
      <div className="bg-[#F8FDFF] p-8 border border-gray-200 rounded-sm shadow-lg max-w-sm w-full">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/Logo1.svg"
            alt="logo"
            width={38}
            height={40}
            className="pr-1"
          />
          <span className="text-2xl pl-1 font-sans text-[#595DDB]">
            ClearTime®
          </span>
        </div>
        <form action={async (e) => {
          const email = e.get("email")?.toString()
          const password = e.get("password")?.toString()

          if (!password || !email) return alert("Please enter email and password")

          let resp = await fetch(`/api/v1/auth/login`, {
            method: "POST",
            body: JSON.stringify({
              email,
              password
            })
          })

          let loginStatus = await resp.json()

          if (!loginStatus.error) router.push("/employee")

        }}>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              name={"email"}
              className="w-full px-3 py-2 border border-[#A8ABF4] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D2D5FF]"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-[#A8ABF4] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D2D5FF]"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4 text-center">
            <a href="#" className="text-md text-[#6F73F6] hover:underline">
              Reset Password
            </a>
          </div>
          <input
            className="w-full btn text-white py-2 rounded-sm cursor-pointer"
            type={"submit"}
          />
        </form>
      </div>
    </div>
  )
}

export default Page