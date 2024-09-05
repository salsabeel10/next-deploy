import React from 'react'
import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import printer from '../assets/printer.svg'

const PrintDocument = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-10 h-10 bg-white border border-gray-400 text-[#6f74f6] rounded-full cursor-pointer hover:bg-slate-50">
          <FontAwesomeIcon icon={faDownload} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-white border border-gray-400 text-[#6f74f6] rounded-full cursor-pointer hover:bg-slate-50">
          <FontAwesomeIcon icon={faPrint} />
        </div>
      </div>

      <div className="flex items-center space-x-4 py-2">
        <button className="bg-white border border-[#A8ABF4] text-[#6F73F6] px-4 py-2 rounded hover:bg-slate-50">
          Edit
        </button>
        <button className="btn text-white px-4 py-2 rounded ">
          Submit
        </button>
      </div>
    </div>
  )
}

export default PrintDocument
