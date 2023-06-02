import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const NavList = ({ to, title, isDropdown, dropdowns = [] }) => {
  
  if (isDropdown) {
    return <Dropdown title={title} dropdowns={dropdowns} />
    
  }
  return (
    <li>
      <Link className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' to={to}>{title}</Link>
    </li>
  )
}

export default NavList