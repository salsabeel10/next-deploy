import React from 'react'


const FormComputeSalary = () => {
  return (
    <div className="px-4 mt-1 w-full md:w-[90%]">
      <form className="p-3 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* First Column */}
          <div className="order-1">
            <div className="mb-4">
              <label className="block text-black">Employee ID</label>
              <input
                type="text"
                placeholder="Bond"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Start Date</label>
              <input
                type="date"
                placeholder="20/03/2001"
                className="w-full text-gray-600 border rounded px-2 py-1"
              />
            </div>
            <button
              type="submit"
              className="mt-2 btn px-4 py-2 rounded w-full md:w-auto"
            >
              Generate TimeSheet
            </button>
          </div>
          <div className="order-2">
            <div className="mb-4">
              <label className="block text-black">Name</label>
              <input
                type="text"
                placeholder="Bond"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">End Date</label>
              <input
                type="date"
                placeholder="20/03/2001"
                className="w-full text-gray-700 border rounded px-2 py-1"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormComputeSalary
