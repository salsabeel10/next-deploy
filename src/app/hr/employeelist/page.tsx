import React from 'react'

import Header from '@/components/Header'
import SideBarHr from '@/components/HR/SideBarHr'      
import FirstBtn from '@/components/HR/FirstBtn'
import ButtonEmp from '@/components/HR/ButtonEmp'
import EmployeeList from '@/components/HR/EmployeeList'

const EmployeeListPage = () => {
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
          <EmployeeList />
        </main>
      </div>
    </div>
  )
}

export default EmployeeListPage