import React from 'react'
import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import printer from '../assets/printer.svg'

const PrintFinance = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-[#6f74f6] font-medium italic cursor-pointer hover:underline">Generate Summary Invoice For The Project</span>
      </div>

      <div className="flex items-center space-x-4 py-2">
        <button className="bg-white border border-[#A8ABF4] text-[#6F73F6] px-4 py-2 rounded hover:bg-slate-50">
          Edit
        </button>
        <button className="btn text-white px-4 py-2 rounded ">Submit</button>
      </div>
    </div>
  )
}

export default PrintFinance
