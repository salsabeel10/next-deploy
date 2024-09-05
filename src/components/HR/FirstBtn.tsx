'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const FirstBtn = () => {
  const router = useRouter()
  const pathname = usePathname()

  function GotoEmployee() {
    router.push('/hr')
  }

  function GotoProjectInit() {
    router.push('/hr/projectinitiator')
  }

  return (
    <div className="flex flex-col py-2 px-6 md:flex-row space-y-2 md:space-y-0 md:space-x-4 pl-6">
      <div className="border border-[#A8ABF4] p-1 rounded-sm">
        <button
          onClick={GotoEmployee}
          className={`px-2 py-1 text-sm md:px-4 md:py-1 md:text-base rounded ${
            pathname === '/hr' ||
            pathname === '/hr/computesalary' ||
            pathname === '/hr/employeelist'
              ? 'btn'
              : 'btn-non'
          }`}
        >
          Employee
        </button>
        <button
          onClick={GotoProjectInit}
          className={`ml-3 px-2 py-1 text-sm md:px-4 md:py-1 md:text-base rounded ${
            pathname === '/hr/projectinitiator' ||
            pathname === '/hr/projectinitiator/list' ||
            pathname === '/hr/projectinitiator/list/edit'
              ? 'btn'
              : 'bg-white text-[#6F73F6]'
          }`}
        >
          Project Initiator
        </button>
      </div>
    </div>
  )
}

export default FirstBtn
