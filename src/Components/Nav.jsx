import React,{useState, useEffect} from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartTab } from '../Redux/cartSlice'
// import { toggleCartTab } from '../Redux/cartSlice'

const Nav = () => {
  const count = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <nav className='w-full flex items-center justify-between bg-zinc-300 mb-5 border-b-slate-300 border-2 p-2 fixed'>
        <Link to='/' className="md:text-2xl font-semibold">BAAZAAR</Link>
        <div>
        <Link to='/about' className="text-xl">About</Link>
        <Link to='/contact' className="text-xl mx-3">Contact</Link>
        <Link to='/services' className="text-xl">Services</Link>
        <Link to='/login' className="text-xl ml-3">Login</Link>
        </div>

        <div className='h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 relative hover:cursor-pointer' onClick={()=> dispatch(toggleCartTab())}>
            <FaCartArrowDown/>
            <span   className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{count.length}</span>
        </div>
    </nav>
  )
}

export default Nav
