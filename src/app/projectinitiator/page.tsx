'use client'
import React from 'react'

import SideBar from '@/components/ProjectInitiator/SideBar'
import Header from '@/components/ProjectInitiator/Header'
import AddBtn from '@/components/ProjectInitiator/AddBtn'
import FormProject from '@/components/ProjectInitiator/FormProject'
import Print from '@/components/TimeSheet/Print'

const TimeSheet = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar*/}
      <SideBar />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header />
        <div className="pl-5 pr-4 mb-3">
          {/* <AddBtn /> */}
          <FormProject />
          <Print />
        </div>
      </div>
    </div>
  )
}

export default TimeSheet
