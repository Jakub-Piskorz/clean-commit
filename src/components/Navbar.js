import React from 'react'
import '@/styles/main.scss'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <>
      <header className="header absolute top-0 w-full bg-green-soft h-20">
        <div className="w-main h-full m-auto flex items-center justify-between">
          <Link to="/">
            <img src="img/logo.svg" className="h-6" />
          </Link>
          <Link to="/" className="text-white login">
            Login
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar
