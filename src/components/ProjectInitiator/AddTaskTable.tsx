import React, { useState } from 'react'
import AddTask from './AddTask'

interface Row {
  assetId: string
  tasks: string
  isNew?: boolean // Add a flag to identify new rows
}

const AddTaskTable: React.FC = () => {
  const columns = ['Asset ID', 'Tasks']

  const initialRows: Row[] = [
    {
      assetId: 'A001',
      tasks: 'Task 1',
    },
    {
      assetId: 'A002',
      tasks: 'Task 2',
    },
  ]

  const [rows, setRows] = useState<Row[]>(initialRows)
  const [isEditing, setIsEditing] = useState<boolean>(false) // Track if the new row is being edited

  const handleAddNewRow = () => {
    const newRow: Row = {
      assetId: `A00${rows.length + 1}`, // Generate temporary Asset ID
      tasks: `Task ${rows.length + 1}`, // Assign a default task
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

  const renderCellContent = (row: Row, rowIndex: number, key: keyof Row) => {
    if (key === 'tasks' && row.isNew && isEditing) {
      return (
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={row.tasks}
            onChange={(e) =>
              setRows((prevRows) => {
                const updatedRows = [...prevRows]
                updatedRows[rowIndex].tasks = e.target.value
                return updatedRows
              })
            }
            className="w-full h-full bg-white outline-none px-1 text-xs md:text-base"
          />
          <button
            onClick={() => handleSaveNewRow(rowIndex)}
            className="ml-2 py-1 px-2 btn rounded-sm"
          >
            Save
          </button>
        </div>
      )
    }
    return <span>{row[key] as string}</span>
  }

  return (
    <div className="overflow-x-auto font-nunito text-[#5A5A5A] mb-5">
      <AddTask onAddNewRow={handleAddNewRow} />{' '}
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
                key={`${rowIndex}-asset-id`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                {row.assetId}
              </td>
              <td
                key={`${rowIndex}-tasks`}
                className="border border-gray-300 p-1 text-xs md:p-3 md:text-base"
              >
                {renderCellContent(row, rowIndex, 'tasks')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AddTaskTable
