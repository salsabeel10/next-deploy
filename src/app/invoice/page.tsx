import React from 'react'
import Header from '@/components/Header'
import Sidebar2 from '@/components/Sidebar2'

const Invoice = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar2 />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header />
      </div>
    </div>
  )
}

export default Invoice
