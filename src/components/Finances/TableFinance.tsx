"use client"
import React from 'react'

const TableFinance = () => {
  const columns = [
    'Date',
    'Location',
    'BU',
    'Div',
    'Year',
    'No',
    'Invoice Number',
    'Invoice',
    'Amount',
    'Tax',
    'Currency',
  ]
  const rows = [
    [
      '01/01/2024',
      'UAE',
      'AE',
      'Des',
      '2024',
      '1000',
      '69111',
      'Payment',
      '32345',
      '-',
      'AED',
    ],
    [
      '01/01/2024',
      'UAE',
      'AE',
      'Des',
      '2024',
      '1000',
      '69111',
      'Payment',
      '32345',
      '-',
      'AED',
    ],
    [
      '01/01/2024',
      'UAE',
      'AE',
      'Des',
      '2024',
      '1000',
      '69111',
      'Payment',
      '32345',
      '-',
      'AED',
    ],
    [
      '01/01/2024',
      'UAE',
      'AE',
      'Des',
      '2024',
      '1000',
      '69111',
      'Payment',
      '32345',
      '-',
      'AED',
    ],
    [
      '01/01/2024',
      'UAE',
      'AE',
      'Des',
      '2024',
      '1000',
      '69111',
      'Payment',
      '32345',
      '-',
      'AED',
    ],
  ]
  return (
    <div className="overflow-x-auto mb-5">
      <table className="table-auto border-collapse border border-gray-300 w-full">
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

export default TableFinance
