import React from 'react'
import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import printer from '../assets/printer.svg'

const Print = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[#6f74f6]">Last Submitted on: 29-08-2024</span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-10 h-10 bg-white border border-gray-400 text-[#6f74f6] rounded-full cursor-pointer hover:bg-slate-50">
          <FontAwesomeIcon icon={faDownload} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-white border border-gray-400 text-[#6f74f6] rounded-full cursor-pointer  hover:bg-slate-50">
          {/* <img src={printer} alt="printer" /> */}
          <FontAwesomeIcon icon={faPrint} />
        </div>
      </div>
    </div>
  )
}

export default Print
