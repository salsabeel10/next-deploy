import React from 'react'
import Header from '@/components/Header'
import Sidebar2 from '@/components/Sidebar2'
import SelectFinance from '@/components/Finances/SelectFinance'
import TableFinance from '@/components/Finances/TableFinance'
import Support from '@/components/Support'
import PrintFinance from '@/components/Finances/PrintFinance'

const DocumentCnt = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Hidden on small screens, visible on medium screens and above */}
      <Sidebar2 />
      <div className="flex-1 flex flex-col ">
        {/* Header takes full width */}
        <Header />
        {/* Form takes remaining space */}
        <div className="pl-6">
          <SelectFinance />
          <div className="py-5 pr-5">
            <TableFinance />
            <PrintFinance />
          </div>
        </div>
        <Support />
      </div>
    </div>
  )
}

export default DocumentCnt
