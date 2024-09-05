'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const ButtonProjectInit = () => {
  const router = useRouter()
  const pathname = usePathname()

  function GotoProjectInit() {
    router.push('/hr/projectinitiator')
  }

  function GotoProjectInitList() {
    router.push('/hr/projectinitiator/list')
  }


  return (
    <div className="flex flex-col py-2 px-6 md:flex-row space-y-2 md:space-y-0 md:space-x-4 pl-6">
      <button
        onClick={GotoProjectInit}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          pathname === '/hr/projectinitiator' ? 'btn' : 'btn-non'
        }`}
      >
        PI Enrollment
      </button>
      <button
        onClick={GotoProjectInitList}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          pathname === '/hr/projectinitiator/list' ||
          pathname === '/hr/projectinitiator/list/edit'
            ? 'btn'
            : 'btn-non'
        }`}
      >
        PI List
      </button>
    </div>
  )
}

export default ButtonProjectInit
