'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const ButtonEmp = () => {
  const router = useRouter()
  const pathname = usePathname()

  function GotoEmployee() {
    router.push('/hr')
  }

  function GotoCompute() {
    router.push('/hr/computesalary')
  }

  function GotoEmployeeList() {
    router.push('/hr/employeelist')
  }

  return (
    <div className="flex flex-col py-2 px-6 md:flex-row space-y-2 md:space-y-0 md:space-x-4 pl-6">
      <button
        onClick={GotoEmployee}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          pathname === '/hr' ? 'btn' : 'btn-non'
        }`}
      >
        Employee Enrollment
      </button>
      <button
        onClick={GotoCompute}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          pathname === '/hr/computesalary' ? 'btn' : 'btn-non'
        }`}
      >
        Compute Salary
      </button>
      <button
        onClick={GotoEmployeeList}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          pathname === '/hr/employeelist' ? 'btn' : 'btn-non'
        }`}
      >
        Employee List
      </button>
    </div>
  )
}

export default ButtonEmp
