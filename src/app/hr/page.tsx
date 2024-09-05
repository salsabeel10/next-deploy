'use client'

import FormEmpEnroll from '@/components/HR/FormEmpEnroll'
import SideBarHr from '@/components/HR/SideBarHr'
import Header from '@/components/Header'
import FirstBtn from '@/components/HR/FirstBtn'
import ButtonEmp from '@/components/HR/ButtonEmp'

const EmployeeEnrolment = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBarHr />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        <FirstBtn />
        <ButtonEmp />
        {/* Form */}
        <main className="flex-1 p-4">
          <FormEmpEnroll />
        </main>
      </div>
    </div>
  )
}

export default EmployeeEnrolment
