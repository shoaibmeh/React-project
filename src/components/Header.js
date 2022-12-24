import React from 'react'
import Logo from '../img/logo.png'
import userImage from '../img/11.png'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo' />
        <img src={userImage} alt="" className='userImage'/>
    </div>
  )
}

export default Header