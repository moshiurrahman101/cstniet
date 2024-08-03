import Link from 'next/link'
import React from 'react'
import { FaBars } from "react-icons/fa6";

function Nav(props) {
  return (
    <div className='h-[12vh] bg-purple-700 shadow-md'>
      <div className='w-[80%] flex items-center justify-between mx-auto h-[12vh]'>
        <h1 className='text-[16px] md:text-[25px] font-bold text-white'>
          <span>Department of </span>
          <span className='text-yellow-300'>CST</span>
        </h1>

        <ul className='hidden lg:flex items-center space-x-10'>
          <li className='text-[17px] cursor-pointer text-white hover:text-yellow-400'>
            <Link href="/">Home</Link>
          </li>
          <li className='text-[17px] cursor-pointer text-white hover:text-yellow-400'>
            <Link href="/about-us">About us</Link>
          </li>
          <li className='text-[17px] cursor-pointer text-white hover:text-yellow-400'>
            <Link href="/events">Events</Link>
          </li>
        </ul>
        <div className='flex  items-center justify-between space-x-3'>
          <button className='text-[14px] py-1 px-3 lg:text-[17px] lg:py-2 lg:px-4 bg-yellow-400 text-black rounded-full'>
            <Link href={'/login'}>Login</Link>
          </button>
          <FaBars onClick={props.openNav} className='text-white lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Nav