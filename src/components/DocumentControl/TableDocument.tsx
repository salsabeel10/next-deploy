import React from 'react'

const TableDocument = () => {
  const columns = [
    'Date',
    'Location',
    'BU',
    'Div',
    'Year',
    'No',
    'Dept',
    'Asset',
    'Task',
    'Status',
    'Man Hrs',
    'Book Mn Hr',
  ]
  const rows = [
    [
      '01/01/2024',
      'Dubai',
      'AE',
      'Des',
      '2024',
      '1000',
      'Elec',
      'BC1',
      'Design SAAS UI',
      'IFR',
      '1.5',
      '1.5',
    ],
    [
      '01/01/2024',
      'Sharjah',
      'AE',
      'Des',
      '2024',
      '1000',
      'Elec',
      'BC1',
      'Design SAAS UI',
      'IFR',
      '1.5',
      '1.5',
    ],
    [
      '01/01/2024',
      'Sharjah',
      'AE',
      'Des',
      '2024',
      '1000',
      'Elec',
      'BC1',
      'Design SAAS UI',
      'IFR',
      '1.5',
      '1.5',
    ],
    [
      '01/01/2024',
      'Sharjah',
      'AE',
      'Des',
      '2024',
      '1000',
      'Elec',
      'BC1',
      'Design SAAS UI',
      'IFR',
      '1.5',
      '1.5',
    ],
    [
      '01/01/2024',
      'Sharjah',
      'AE',
      'Des',
      '2024',
      '1000',
      'Elec',
      'BC1',
      'Design SAAS UI',
      'IFR',
      '1.5',
      '1.5',
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

export default TableDocument
