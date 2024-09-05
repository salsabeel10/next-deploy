import React from 'react'

import Sidebar2 from '@/components/Sidebar2'
import FormProjectInit from '@/components/ProjectInit/FormProjectInit'
import Support from '@/components/Support'
import Header from '@/components/Header'

const ProjectInit = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar2 />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header />
        <main className="flex-1 p-3 ">
          <FormProjectInit />
        </main>

        <div className="mb-2">
          <Support />
        </div>
      </div>
    </div>
  )
}

export default ProjectInit
