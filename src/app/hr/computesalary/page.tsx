'use client'
import React from 'react'

import FormComputeSalary from '@/components/HR/FormComputeSalary'
import TimeSheetCompute from '@/components/HR/TimeSheetCompute'
import SideBarHr from '@/components/HR/SideBarHr'
import Header from '@/components/Header'
import FirstBtn from '@/components/HR/FirstBtn'
import ButtonEmp from '@/components/HR/ButtonEmp'
import Support from '@/components/Support'

const ComputeSalary = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBarHr />
      <div className="flex-1 flex flex-col">
        <Header />
        <FirstBtn />
        <ButtonEmp />
        <main className="flex-1 p-4">
          <FormComputeSalary />
        </main>
        <div className="w-full h-full px-6  md:px-11">
          <TimeSheetCompute />
        </div>
        <div>
          <Support />
        </div>
      </div>
    </div>
  )
}

export default ComputeSalary
