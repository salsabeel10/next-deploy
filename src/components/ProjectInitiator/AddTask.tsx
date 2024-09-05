"use client"
import React from 'react'
import { FaPlus,FaArrowCircleLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

interface AddBtnProps {
  onAddNewRow: () => void
}

const AddTask: React.FC<AddBtnProps> = ({ onAddNewRow }) => {
    const router =useRouter()
    const goBack=()=>{
        router.push('/projectinitiator')
    }
    
  return (
    <div className="pb-1 lg:mt-0 flex justify-between items-center">
      <div className="flex items-center">
        
        <button onClick={goBack} className="btn-non mt-1 mb-3 px-4 py-2 rounded flex items-center">
          <FaArrowCircleLeft className="mr-2 w-5 h-5" />
          Project Timesheet
        </button>

        {/* Add New Task Button */}
        <button
          onClick={onAddNewRow}
          className="btn mt-1 mb-3 ml-4 px-4 py-2 rounded flex items-center"
        >
          Add New Task
          <span className="ml-3 flex items-center justify-center w-5 h-5 bg-white rounded-full">
            <FaPlus className="text-[#6f74f6]" />
          </span>
        </button>
      </div>

      {/* ProjectId Text on the Right Side */}
      <div className="text-md italic text-[#6F73F6]">
        Project ID:123
      </div>
    </div>
  )
}

export default AddTask
