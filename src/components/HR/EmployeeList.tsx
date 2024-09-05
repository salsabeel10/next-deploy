'use client'
import React from 'react'

const EditButtons = () => (
  <div className="flex space-x-2">
    <img src="/Edit.png" alt="Edit" className="w-5 h-5 cursor-pointer" />
    <img src="/Delete.png" alt="Delete" className="w-5 h-5 cursor-pointer" />
  </div>
)

const EmployeeList = () => {
  const columns = [
    'Employee Name',
    'Employee ID',
    'Designation',
    'Location',
    'Bu',
    'Division',
    'Department',
    '',
  ]
  const rows = [
    [
      'James Bond',
      '8px-DES_003',
      'Scientist',
      'UAE',
      'AE',
      'BioChemistry',
      'Design',
      <EditButtons key="1" />,
    ],
    [
      'James Bond',
      '8px-DES_003',
      'Scientist',
      'UAE',
      'AE',
      'BioChemistry',
      'Design',
      <EditButtons key="2" />,
    ],
    [
      'James Bond',
      '8px-DES_003',
      'Scientist',
      'UAE',
      'AE',
      'BioChemistry',
      'Design',
      <EditButtons key="3" />,
    ],
    [
      'James Bond',
      '8px-DES_003',
      'Scientist',
      'UAE',
      'AE',
      'BioChemistry',
      'Design',
      <EditButtons key="4" />,
    ],
  ]
  return (
    <div className="overflow-x-auto mb-5">
      <table className="table-auto font-nunito text-[#5A5A5A] border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-[#6f74f6] text-white">
            {columns.map((column, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-xs md:p-3 md:text-base"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-[#F9FCFE] hover:bg-gray-100">
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList
