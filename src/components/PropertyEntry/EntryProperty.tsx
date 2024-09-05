import React, { useState } from 'react'

const EntryProperty: React.FC = () => {
  // State to store the new location and the list of locations
  const [location, setLocation] = useState<string>('')
  const [businessUnit, setBusinessUnit] = useState<string>('')
  const [division, setDivision] = useState<string>('')
  const [department, setDepartment] = useState<string>('')

  // States to store the lists of data
  const [locations, setLocations] = useState<string[]>([
    'Dubai',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
  ])

  const [businessUnits, setBusinessUnits] = useState<string[]>([
    'Sales',
    'Marketing',
    'HR',
    'IT',
    'Finance',
    'Sales',
    'Marketing',
    'HR',
    'IT',
    'Finance',
  ])

  const [divisions, setDivisions] = useState<string[]>([
    'North Division',
    'South Division',
    'East Division',
    'West Division',
    'Central Division',
    'North Division',
    'South Division',
    'East Division',
    'West Division',
    'Central Division',
  ])

  const [departments, setDepartments] = useState<string[]>([
    'Customer Support',
    'Research and Development',
    'Product Development',
    'Legal',
    'Operations',
    'Customer Support',
    'Research and Development',
    'Product Development',
    'Legal',
    'Operations',
  ])


  // Functions to handle adding new entries for each column
  const addLocation = () => {
    if (location.trim()) {
      setLocations([...locations, location])
      setLocation('') // Clear input field after adding
    }
  }

  const addBusinessUnit = () => {
    if (businessUnit.trim()) {
      setBusinessUnits([...businessUnits, businessUnit])
      setBusinessUnit('') // Clear input field after adding
    }
  }

  const addDivision = () => {
    if (division.trim()) {
      setDivisions([...divisions, division])
      setDivision('') // Clear input field after adding
    }
  }

  const addDepartment = () => {
    if (department.trim()) {
      setDepartments([...departments, department])
      setDepartment('') // Clear input field after adding
    }
  }

  return (
    <div className="flex flex-col items-center px-4 h-auto">
      <div className="flex space-x-4 mb-4  w-full h-auto">
        {/* Location Column */}
        <div className="w-1/4 p-2 pt-3 bg-[#F3F3F3] rounded-md">
          <div className="flex items-center space-x-2 w-full">
            {/* Input Field */}
            <div className="w-3/4 ">
              <input
                type="text"
                placeholder="Type new location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 placeholder-[#5A5A5A] bg-white border border-[#A8ABF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8ABF4]"
              />
            </div>

            {/* Add Button */}
            <div className="w-1/4">
              <button
                onClick={addLocation}
                className="btn p-2 rounded-md w-full"
              >
                Add
              </button>
            </div>
          </div>
          <div className="h-[30rem] mt-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#A8ABF4] pr-2">
            <ul className="space-y-2">
              {locations.map((loc, index) => (
                <li
                  key={index}
                  className="mx-1 p-2 bg-white text-center font-sans text-[#363737] border border-[#A8ABF4] rounded-md"
                >
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Unit Column */}
        <div className="w-1/4 p-2 pt-3 bg-[#F3F3F3] rounded-md">
          <div className="flex items-center space-x-2 w-full">
            <div className="w-3/4 ">
              <input
                type="text"
                placeholder="Type new Business Unit"
                value={businessUnit}
                onChange={(e) => setBusinessUnit(e.target.value)}
                className="w-full p-2 placeholder-[#5A5A5A] bg-white border border-[#A8ABF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8ABF4]"
              />
            </div>
            {/* Add Button */}
            <div className="w-1/4">
              <button
                onClick={addBusinessUnit}
                className="btn p-2 rounded-md w-full"
              >
                Add
              </button>
            </div>
          </div>

          <div className="h-[30rem] mt-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#A8ABF4]">
            <ul className="space-y-2">
              {businessUnits.map((unit, index) => (
                <li
                  key={index}
                  className="mx-1 p-2 bg-white text-center font-sans text-[#363737] border border-[#A8ABF4] rounded-md"
                >
                  {unit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Division Column */}
        <div className="w-1/4 p-2 pt-3 bg-[#F3F3F3] rounded-md">
          <div className="flex items-center space-x-2 w-full">
            <div className="w-3/4">
              <input
                type="text"
                placeholder="Type new Division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full p-2 placeholder-[#5A5A5A] bg-white border border-[#A8ABF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8ABF4]"
              />
            </div>
            {/* Add Button */}
            <div className="w-1/4">
              <button
                onClick={addDivision}
                className="btn p-2 rounded-md w-full"
              >
                Add
              </button>
            </div>
          </div>
          <div className="h-[30rem] mt-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#A8ABF4]">
            <ul className="space-y-2">
              {divisions.map((div, index) => (
                <li
                  key={index}
                  className="mx-1 p-2 bg-white text-center font-sans text-[#363737] border border-[#A8ABF4] rounded-md"
                >
                  {div}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Department Column */}
        <div className="w-1/4 p-2 pt-3 bg-[#F3F3F3] rounded-md">
          <div className="flex items-center space-x-2 w-full">
            <div className="w-3/4 ">
              <input
                type="text"
                placeholder="Type new Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full p-2 placeholder-[#5A5A5A] bg-white border border-[#A8ABF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8ABF4]"
              />
            </div>
            {/* Add Button */}
            <div className="w-1/4">
              <button
                onClick={addDepartment}
                className="btn p-2 rounded-md w-full"
              >
                Add
              </button>
            </div>
          </div>
          <div className="h-[30rem] mt-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#A8ABF4]">
            <ul className="space-y-2">
              {departments.map((dept, index) => (
                <li
                  key={index}
                  className="mx-1 p-2 bg-white text-center font-sans text-[#363737] border border-[#A8ABF4] rounded-md"
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntryProperty
