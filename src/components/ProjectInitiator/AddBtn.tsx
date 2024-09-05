import React from 'react'
import { FaPlus } from 'react-icons/fa'

interface AddBtnProps {
  onAddNewRow: () => void
}

const AddBtn: React.FC<AddBtnProps> = ({ onAddNewRow }) => {
  return (
    <div className="pb-1 lg:mt-0">
      <button
        onClick={onAddNewRow}
        className="btn mt-1 mb-3 px-4 py-2 rounded flex items-center"
      >
        Add New Project
        <span className="ml-3 flex items-center justify-center w-5 h-5 bg-white rounded-full">
          <FaPlus className="text-[#6f74f6]" />
        </span>
      </button>
    </div>
  )
}

export default AddBtn
