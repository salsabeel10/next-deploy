'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const FormHrPiEdit = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="flex flex-col  lg:flex-row gap-4">
      {/* Left Column: Employee Details (50%) */}
      <div className="w-full ml-3 lg:w-1/2">
        <div className="mb-4">
          <label className="block text-black">Project Initiator Name</label>
          <input
            type="text"
            name="name"
            placeholder="Bond"
            className="w-full placeholder-gray-700 border border-[#A8ABF4] rounded px-2 py-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Set Username</label>
          <input
            type="text"
            name="username"
            placeholder="james.bond"
            className="w-full placeholder-gray-700 border border-[#A8ABF4] rounded px-2 py-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Set Email</label>
          <input
            type="email"
            name="email"
            placeholder="bond@example.com"
            className="w-full placeholder-gray-700 border border-[#A8ABF4] rounded px-2 py-1"
            required
          />
        </div>

        <div className="mb-4 w-full md:w-auto">
          <label className="block text-black">Set Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="w-full border border-[#A8ABF4] text-gray-700 placeholder-gray-700 rounded px-4 py-2"
              required
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-4 my-auto text-blue-500 cursor-pointer"
            />
          </div>
          <div className="mb-4 pt-3">
            <button className="btn p-2 rounded-sm">
              Save Project Initiator Details
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Employee Picture (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <label className="block text-black mb-2">Employee Picture</label>
        <div className="w-[5rem] h-[5rem] md:w-[9rem] md:h-[9rem] mb-[.8rem] bg-gray-300 rounded-full flex items-center justify-center">
          <span>Profile</span>
        </div>
        <button className="border text-gray-800 hover:bg-blue-100 px-4 py-2 rounded transition w-full md:w-auto">
          Upload Picture (300 X 250px)
        </button>
      </div>
    </div>
  )
}
export default FormHrPiEdit
