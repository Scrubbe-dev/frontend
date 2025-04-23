import React from 'react'
import MainNavbar from '../navbar'
import Footer from '../footer'

function MainLayout({children}:{children:React.ReactNode}) {
  return (
     <main  className='min-h-full overflow-x-hidden w-full '>
          <MainNavbar  />
        <div className='w-full flex-grow'>
            {children}
        </div>
        <Footer />
     </main>
  )
}

export default MainLayout