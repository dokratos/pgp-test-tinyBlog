import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <header className='lg: text-center'>
    <h1 className='mb-8 text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-7xl dark:text-white'><span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Tiny</span>Blog</h1>
    {/* <Link ref='#History'>History</Link> */}
  </header>
  )
}

export default Header