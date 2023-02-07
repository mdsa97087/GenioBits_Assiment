import React from 'react'
import { Link } from 'react-router-dom'
import LogOut from '../Pages/LogOut'
import Search from '../Pages/Search'
import "./Navbar.css"


function Navbar() {
  return (
    <div bg='dark' className='navbar'>
    {/* <Link to="/">Home</Link> */}
    {/* <Search/> */}
    <Link to='/cart'>Cart</Link>
    <Link to='/login'>Login</Link>
    <Link to='/signup'>SignUp</Link>
    <LogOut />
    </div>
  )
}

export default Navbar