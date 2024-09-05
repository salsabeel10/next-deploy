import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Support = () => {
  return (
    <div className="flex justify-end items-end h-full py-3 pr-3">
      <div className="bg-[#6F73F6] hover:bg-[#6F73F6]/80 text-white px-3 py-3 rounded-full shadow-lg cursor-pointer">
        <FontAwesomeIcon icon={faHeadset} size="lg" />
      </div>
    </div>
  )
}

export default Support
