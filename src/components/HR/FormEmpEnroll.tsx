import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faEye,
  faEyeSlash,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {AddEmployee} from '../ApiEndpoint/addEmployee'

const FormEmpEnroll = () => {

  const {
    employee,
    handleEmployeeChange,
    handleSubmit,
  } = AddEmployee();

  const [isPassword, setIsPassword] = useState(true)
  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword)
  }
  const [isPassword1, setIsPassword1] = useState(true)
  const togglePasswordVisibility1 = () => {
    setIsPassword1(!isPassword1)
  }

  return (
    <div className="px-4 mt-1 w-full md:w-[90%]">
      <form onSubmit={handleSubmit} className="p-3 border-2 border-blue-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First Column */}
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* First Row */}
            <div className="mb-2">
              <label className="block text-black">Employee Name</label>
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleEmployeeChange}
                placeholder="Bond"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-black">Employee ID</label>
              <input
                type="text"
                name="employee_id"
                value={employee.employee_id}
                onChange={handleEmployeeChange}
                placeholder="233434255"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
                required
              />
            </div>

            {/* Second Row */}
            <div className="mb-2">
              <label className="block text-black">Joining Date</label>
              <input
                type="date"
                name="start_date"
                value={employee.start_date}
                onChange={handleEmployeeChange}
                className="w-full text-gray-700 border rounded px-2 py-1"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-black">Designation</label>
              <input
                type="text"
                name="designation"
                value={employee.designation}
                onChange={handleEmployeeChange}
                placeholder="Designation"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
                required
              />
            </div>

            {/* Third Row */}
            <div className="mb-2">
              <label className="block text-black">Location</label>
              <div className="relative w-full">
                <input
                  type="text"
                  name="location_id"
                  value={employee.location_id}
                  onChange={handleEmployeeChange}
                  placeholder="Your Location"
                  className="w-full placeholder-gray-700 border rounded px-2 py-1 pr-10"
                  required
                />
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-black">Business Unit</label>
              <select
                name="business_unit_id"
                value={employee.business_unit_id}
                onChange={handleEmployeeChange}
                required
                className="w-full text-gray-700 bg-white border rounded px-2 py-2"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            {/* Fourth Row */}
            <div className="mb-2">
              <label className="block text-black">Division</label>
              <select
                name="div_id"
                value={employee.div_id}
                onChange={handleEmployeeChange}
                required
                className="w-full placeholder-gray-700 bg-white border rounded px-1 py-2"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-black">Department</label>
              <select
                name="dept_id"
                value={employee.dept_id}
                onChange={handleEmployeeChange}
                required
                className="w-full text-gray-700 bg-white border rounded px-1 py-2"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            {/* Fifth Row */}
            <div className="relative w-full">
              <label className="block text-black">Salary</label>
              <div className="relative">
                <input
                  type="number"
                  name="salary"
                  value={employee.salary}
                  onChange={handleEmployeeChange}
                  placeholder="$9999"
                  className="w-full placeholder-gray-700 border rounded px-2 py-1 pr-10"
                  required
                />
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                />
              </div>
            </div>
            <div className="relative w-full">
              <label className="block text-black">Authorization Code</label>
              <div className="relative">
                <input
                  type={isPassword ? 'password' : 'text'}
                  placeholder="Enter Code"
                  className="w-full placeholder-gray-700 border rounded px-3 py-1 text-gray-700 pr-24 pl-4"
                />
                <FontAwesomeIcon
                  icon={isPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-16 my-auto text-blue-500 cursor-pointer"
                />
                <button className="absolute inset-y-0 right-0 btn text-sm px-3 py-1 rounded-sm">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center lg:col-span-1">
            <label className="block text-black mb-2">Employee Picture</label>
            <div className="w-[5rem] h-[5rem] md:w-[9rem] md:h-[9rem] mb-[.8rem] bg-gray-300 rounded-full flex items-center justify-center">
              <span>Profile</span>
            </div>
            <button className="border text-gray-800 hover:bg-blue-100 px-4 py-2 rounded transition w-full md:w-auto">
              Upload Picture (300 X 250px)
            </button>

            <div className="w-full md:w-auto mb-2 mt-2">
              <label className="block text-black">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="w-full border text-gray-700 placeholder-gray-700 rounded px-4 py-2"
                required
              />
            </div>

            <div className="w-full md:w-auto mb-2">
              <label className="block text-black">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="w-full border text-gray-700 placeholder-gray-700 rounded px-4 py-2"
                required
              />
            </div>
            <div className="w-full md:w-auto">
              <label className="block text-black">Password</label>
              <div className="relative">
                <input
                  type={isPassword1 ? 'password' : 'text'}
                  name="password"
                  placeholder="password"
                  className="w-full border text-gray-700 placeholder-gray-700 rounded px-4 py-2"
                  required
                />
                <FontAwesomeIcon
                  icon={isPassword1 ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility1}
                  className="absolute inset-y-0 right-4 my-auto text-blue-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Sixth Row */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="mt-2 btn px-4 py-2 rounded w-full md:w-auto"
            >
              Save Employee
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormEmpEnroll