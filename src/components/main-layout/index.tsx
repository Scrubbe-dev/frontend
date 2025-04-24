import React from 'react'
//import MainNavbar from '../navbar'
import Navbar from "@/components/landing/Navbar";
import Footer from '../footer'

function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <main className="min-h-full overflow-x-hidden w-full ">
      <Navbar />
      <div className="w-full flex-grow">{children}</div>
      <Footer />
    </main>
  );
}

export default MainLayout