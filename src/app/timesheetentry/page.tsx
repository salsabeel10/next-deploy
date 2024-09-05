"use client"
import React from 'react'
import Sidebar2 from '@/components/Sidebar2'
import HeaderTime from '@/components/TimeSheet/HeaderTime'
import TimeSheetCompute from '@/components/TimeSheet/TimeSheetCompute'
import SelectTimeSheet from '@/components/TimeSheet/SelectTimeSheet'
import Print from '@/components/TimeSheet/Print'
import Support from '@/components/Support'


const TimeSheet = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar*/}
      <Sidebar2/>
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <HeaderTime />
        <div className="pl-5 pr-4 mb-3">
          <SelectTimeSheet />
          <TimeSheetCompute />
          <Print />
        </div>
        <Support />
      </div>
    </div>
  )
}

export default TimeSheet
