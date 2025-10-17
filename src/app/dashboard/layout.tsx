import React from 'react'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'
import { Montserrat } from 'next/font/google'



const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
    
  });
export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
      <div className={`h-full relative ${montserrat.className}`}>
          <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-teal-900'>
              <Sidebar />
          </div>
          <main className='md:pl-72'>
              <Navbar />
              {children}
          </main>
    </div>
  )
}
