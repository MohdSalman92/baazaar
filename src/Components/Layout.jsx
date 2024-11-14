import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
import Cart from '../Pages/Cart'

const Layout = () => {
  return (
    <div className='bg-zinc-200'>
      <Nav />
      <main className='w-[1200px] max-w-full min-h-screen m-auto p-5 pt-12'>
        <Outlet />
      </main>
      <Cart />
    </div>
  )
}

export default Layout
