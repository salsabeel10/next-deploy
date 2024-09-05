import React from 'react'

const SelectTimeSheet = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center py-2 mb-5">
      <div className="flex-1 min-w-[120px]">
        <label className="block text-black">Employee Id</label>
        <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
          <option value="">Bob</option>
          <option value="id1">Employee 1</option>
          <option value="id2">Employee 2</option>
          <option value="id3">Employee 3</option>
        </select>
      </div>

      <div className="flex-1 min-w-[120px]">
        <label className="block text-black">Location</label>
        <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
          <option value="">Dubai</option>
          <option value="loc1">Location 1</option>
          <option value="loc2">Location 2</option>
          <option value="loc3">Location 3</option>
        </select>
      </div>

      <div className="flex-1 min-w-[120px]">
        <label className="block text-black">BU</label>
        <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
          <option value="">UAE</option>
          <option value="bu1">Bu 1</option>
          <option value="bu2">Bu 2</option>
          <option value="bu3">Bu 3</option>
        </select>
      </div>

      <div className="flex-1 min-w-[120px]">
        <label className="block text-black">DIV</label>
        <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
          <option value="">UI-DES</option>
          <option value="div1">Div 1</option>
          <option value="div2">Div 2</option>
          <option value="div3">Div 3</option>
        </select>
      </div>

      <div className="flex-1 min-w-[120px]">
        <label className="block text-black">DEPT</label>
        <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
          <option value="">Design</option>
          <option value="dept1">Dept 1</option>
          <option value="dept2">Dept 2</option>
          <option value="dept3">Dept 3</option>
        </select>
      </div>

      <div className="lg:mt-0 ">
        <button className="btn mt-5 px-4 py-2 rounded">View TimeSheet</button>
      </div>
    </div>
  )
}

export default SelectTimeSheet
