import React from 'react'
import './app.css'
import Add from '../assets/Add'
import Dotmenu from '../assets/Dotmenu'
import Myimage from '../assets/profile.png'
function Header({Icon,heading,count,group}) {
  return (
    <div className='header'>
      <div className='left-header-part'>
        <Icon/>
        <div className='heading'>{heading}</div>
        <div className='count'>{count}</div>
      </div>
      <div className='right-header-part'>
        <Add/>
        <Dotmenu/>
      </div>
    </div>
  )
}

export default Header
