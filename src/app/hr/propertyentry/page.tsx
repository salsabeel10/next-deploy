'use client'

import SideBarHr from '@/components/HR/SideBarHr'
import EntryProperty from '@/components/PropertyEntry/EntryProperty'
import HeaderProperty from '@/components/PropertyEntry/HeaderProperty'


const PropertyEntry = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBarHr />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderProperty />
        {/* Form */}
        <main className="flex-1 p-4">
          <EntryProperty />
        </main>
      </div>
    </div>
  )
}

export default PropertyEntry
