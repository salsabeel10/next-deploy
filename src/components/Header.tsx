import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCog,
  faHeadset,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="container mt-1 w-full md:mt-0 pl-2">
      <div className="flex flex-col  md:flex-row items-center justify-between w-full py-4 pl-2">
        <div className="flex items-center w-full space-x-2 mb-4 md:mb-0">
          <div className="relative w-full md:w-[100%]">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full p-2 text-lg border bg-[#f2f2f2] placeholder-blue-400 placeholder:text-sm border-gray-300 rounded-md pr-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 pr-2"
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex items-center justify-center w-10 h-10 btn cursor-pointer text-white rounded-full">
              <FontAwesomeIcon icon={faBell} />
              <span className="absolute top-0 right-0 inline-flex h-3 w-3 rounded-full bg-red-600 animate-ping"></span>
              <span className="absolute top-0 right-0 inline-flex h-3 w-3 rounded-full bg-[#D2D3F1]"></span>
            </div>
            <div className="flex items-center justify-center w-10 h-10 btn cursor-pointer text-white rounded-full">
              <FontAwesomeIcon icon={faCog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header