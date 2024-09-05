'use client'

import SideBarHr from '@/components/HR/SideBarHr'
import Header from '@/components/Header'
import FirstBtn from '@/components/HR/FirstBtn'
import ButtonProjectInit from '@/components/HR/ProjectInit/ButtonProjectInit'
import PIList from '@/components/HR/ProjectInit/PIList'

const PiList = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBarHr />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        <FirstBtn />
        <ButtonProjectInit />
        {/* Form */}
        <main className="flex-1 p-4">
          <PIList />
        </main>
      </div>
    </div>
  )
}

export default PiList
