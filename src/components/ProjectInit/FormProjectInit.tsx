"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faEye,
  faEyeSlash,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

const FormProjectInit = () => {
  const [isPassword, setIsPassword] = useState(true)
  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword)
  }
  return (
    <div className="pt-1 pl-4 pr-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="order-1">
          <div className="mb-4">
            <label className="block text-black">Project Title</label>
            <input
              type="text"
              placeholder="TimeSheet Design"
              className="w-full placeholder-gray-700 border rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Project Description</label>
            <input
              type="text"
              placeholder="TimeSheet Description"
              className="w-full placeholder-gray-700 border rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Project Value</label>
            <div className="relative">
              <input
                type="number"
                placeholder="7000"
                className="w-full placeholder-gray-700 border rounded px-2 py-1 pr-12"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="font-pt-sans italic font-bold text-[#262626]">
                  AED
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black">Project Manager</label>
            <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-2 btn px-4 py-2 rounded w-full md:w-auto"
          >
            Generate TimeSheet
          </button>
        </div>

        {/* Second column */}
        <div className="order-2">
          <div className="mb-4">
            <label className="block text-black">Start Date</label>
            <input
              type="date"
              className="w-full text-gray-700 border rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">End Date</label>
            <input
              type="date"
              className="w-full text-gray-700 border rounded px-2 py-1"
            />
          </div>
          <div className="relative w-full">
            <label className="block text-black">Authorization Code</label>
            <div className="relative">
              <input
                type={isPassword ? 'password' : 'text'}
                placeholder="Enter Code"
                className="w-full placeholder-gray-700 border rounded px-3 py-1 text-gray-700 pr-24 pl-4" // Adjust padding for the button
              />
              <FontAwesomeIcon
                icon={isPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-16 my-auto text-blue-500 cursor-pointer" // Position icon before button
              />
              <button className="absolute inset-y-0 right-0 btn text-sm px-3 py-1 rounded-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormProjectInit