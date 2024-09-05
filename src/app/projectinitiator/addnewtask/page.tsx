'use client'
import React from 'react'

import SideBar from '@/components/ProjectInitiator/SideBar'
import Header from '@/components/ProjectInitiator/Header'
import AddTaskTable from '@/components/ProjectInitiator/AddTaskTable'
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
          <AddTaskTable />
          <Print />
        </div>
      </div>
    </div>
  )
}

export default TimeSheet
