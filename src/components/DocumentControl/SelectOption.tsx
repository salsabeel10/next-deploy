import React from 'react'

const SelectOption = () => {
  return (
    <div className="flex-1 w-3/12">
      <label className="block text-[#5D60C5]  font-bold pb-1">PROJECT ID</label>
      <select className="w-full text-gray-700 bg-white border border-[#A8ABF4] outline-none rounded pl-2 py-2">
        <option value="">007</option>
        <option value="id1">001</option>
        <option value="id2">002</option>
        <option value="id3">003</option>
      </select>
    </div>
  )
}

export default SelectOption