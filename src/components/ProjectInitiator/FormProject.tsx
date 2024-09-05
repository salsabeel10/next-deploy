import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import AddBtn from './AddBtn' // Ensure correct import path
import { useRouter } from 'next/navigation'

interface Row {
  projectName: string
  location: string
  bu: string
  div: string
  year: string
  number: string
  isNew?: boolean // Add a flag to identify new rows
}

const FormProject: React.FC = () => {
  const router =useRouter()
  const goToTask=()=>{
    router.push('/projectinitiator/addnewtask')
  }
  const columns = ['Project Name', 'Location', 'BU', 'Div', 'Year', 'Number']
  type StringKeysOfRow =
    | 'projectName'
    | 'location'
    | 'bu'
    | 'div'
    | 'year'
    | 'number'

  const locations = ['UAE', 'USA', 'UK']
  const businessUnits = ['AE', 'BE', 'CE']
  const divisions = ['Des', 'Eng', 'Mkt']

  const initialRows: Row[] = [
    {
      projectName: 'TimeSheets',
      location: 'UAE',
      bu: 'AE',
      div: 'Des',
      year: '2024',
      number: '069',
    },
    {
      projectName: 'TimeSheets',
      location: 'UAE',
      bu: 'AE',
      div: 'Des',
      year: '2024',
      number: '069',
    },
  ]

  const [rows, setRows] = useState<Row[]>(initialRows)
  const [editingCell, setEditingCell] = useState<{
    rowIndex: number
    key: keyof Row
  } | null>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false) // Track if the new row is being edited

  const handleSelectChange = (
    value: string,
    rowIndex: number,
    key: StringKeysOfRow // Restrict to string keys only
  ) => {
    const newRows = [...rows]
    const rowToUpdate = { ...newRows[rowIndex] }

    rowToUpdate[key] = value // Safe assignment now that key is restricted to string keys

    newRows[rowIndex] = rowToUpdate
    setRows(newRows)
    setEditingCell(null)
  }

  const isStringKey = (key: keyof Row): key is StringKeysOfRow => {
    return ['projectName', 'location', 'bu', 'div', 'year', 'number'].includes(
      key as string
    )
  }

  const handleCellClick = (rowIndex: number, key: StringKeysOfRow) => {
    setEditingCell({ rowIndex, key })
  }


  const handleAddNewRow = () => {
    const newRow: Row = {
      projectName: '',
      location: locations[0],
      bu: businessUnits[0],
      div: divisions[0],
      year: '',
      number: '',
      isNew: true, // Mark as new row for styling
    }
    setRows([...rows, newRow])
    setIsEditing(true) // Start editing mode for the new row
  }

  const handleSaveNewRow = (rowIndex: number) => {
    const newRows = [...rows]
    newRows[rowIndex].isNew = false // Mark the row as no longer new
    setRows(newRows)
    setIsEditing(false) // Exit editing mode
  }

  const renderCellContent = (
    row: Row,
    rowIndex: number,
    key: keyof Row,
    options: string[]
  ) => {
    if (
      editingCell &&
      editingCell.rowIndex === rowIndex &&
      editingCell.key === key
    ) {
      return (
        <div className="relative">
          <select
            value={row[key] as string} // Ensure this is treated as a string
            onChange={(e) =>
              handleSelectChange(
                e.target.value,
                rowIndex,
                key as StringKeysOfRow
              )
            } // Type cast key
            className="w-full h-full bg-white outline-none px-1 text-xs md:text-base appearance-none"
            autoFocus
            onBlur={() => setEditingCell(null)} // Exit edit mode if focus is lost
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FaCaretDown className="absolute right-2 top-2 pointer-events-none" />
        </div>
      )
    }
    return (
      <div className="flex justify-between items-center">
        <span>{row[key] as string}</span>{' '}
        {/* Ensure this is treated as a string */}
        <button
          onClick={() => {
            if (isStringKey(key)) {
              handleCellClick(rowIndex, key)
            }
          }}
          className="text-black"
        >
          <FaCaretDown />
        </button>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto font-nunito text-[#5A5A5A] mb-5">
      <AddBtn onAddNewRow={handleAddNewRow} />{' '}
      {/* Pass the handler to AddBtn */}
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
            <tr
              key={rowIndex}
              className={`bg-[#ffff] ${
                row.isNew ? 'border-2 border-dashed border-[#9EA1FF]' : ''
              }`}
            >
              <td
                key={`${rowIndex}-project-name`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                <div className="flex justify-between items-center">
                  <span>{row.projectName || 'New Project'}</span>
                  <button
                    onClick={goToTask}
                    className="btn py-1 px-4 rounded-sm"
                  >
                    Tasks
                  </button>
                </div>
              </td>
              <td
                key={`${rowIndex}-location`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                {renderCellContent(row, rowIndex, 'location', locations)}
              </td>
              <td
                key={`${rowIndex}-bu`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                {renderCellContent(row, rowIndex, 'bu', businessUnits)}
              </td>
              <td
                key={`${rowIndex}-div`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                {renderCellContent(row, rowIndex, 'div', divisions)}
              </td>
              <td
                key={`${rowIndex}-year`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                2024
              </td>
              <td
                key={`${rowIndex}-number`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                {row.isNew && isEditing ? (
                  <div className="flex justify-between items-center">
                    <span>069</span> {/* Display the temporary number */}
                    <button
                      onClick={() => handleSaveNewRow(rowIndex)}
                      className="ml-2 py-1 px-2 btn rounded-sm"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  '069'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FormProject
