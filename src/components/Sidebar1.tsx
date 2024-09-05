import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faSignOutAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons'



import {redirect} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { icon: 'fa-solid fa-users', label: 'Employees', path: '/employee' },
  {
    icon: 'fa-regular fa-calendar-clock',
    label: 'TimeSheet Entry',
    path: '/timeSheetEntry',
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    label: 'Invoice',
    path: '/invoice',
  },
  {
    icon: 'fa-solid fa-diagram-project',
    label: 'Project Initiation',
    path: '/projectInitiation',
  },
  {
    icon: 'fa-regular fa-calendar-day',
    label: 'Resource Planner',
    path: '/resourcePlanner',
  },
  {
    icon: 'fa-solid fa-file-lines',
    label: 'Document Control',
    path: '/documentControl',
  },
  {
    icon: 'fa-solid fa-circle-dollar',
    label: 'Finances',
    path: '/finances',
  },
]

const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    const currentPath = location.pathname
    const currentIndex = menuItems.findIndex((item) =>
      currentPath.startsWith(item.path)
    )
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex)
    }
  }, [])

  const handleClick = (index: number) => {
    setSelectedIndex(index)
    redirect(menuItems[index].path)
  }

  return (
    <div className="relative ">
      {/* Menu icon for mobile */}
      <button
        className="pl-4 pt-2 md:hidden top-4 left-6 z-50 text-[#6F73F6]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Sidebar */}

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed  px-0 md:relative pt-5 pb-2 top-0 left-0 h-full w-64 bg-[#f9fcfe] text-black p-4 border-r-2 border-blue-200 transition-transform duration-300 ease-in-out z-40 md:translate-x-0 flex flex-col justify-between`}
      >
        <div className="flex-1 flex-col h-screen">
          <div className="border-b">
            <Link href='/'>
              <div className="flex cursor-pointer  items-center mb-7 pl-6">
                <Image src={"/Logo1.svg"} alt="logo" width={50} height={50} className="pr-1" />
                <span className="text-xl pl-1 font-sans text-[#595DDB] ">
                  ClearTime®
                </span>
              </div>
            </Link>
          </div>

          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center pl-3 p-2 cursor-pointer ${
                  selectedIndex === index
                    ? 'bg-[#E9EEFA] border-l-4 border-blue-700 text-[#6F73F6]'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleClick(index)}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 px-3">
          <button className="flex items-center btn-non py-2 px-4 mb-4 w-full rounded justify-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Aditya Arun
          </button>
          <button className="flex items-center btn py-2 px-4 w-full rounded justify-center">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* toggle close sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Sidebar2