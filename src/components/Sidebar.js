import React from 'react'
import home from '../img/home-run.svg'
import bell from '../img/bell.svg'
import Group from '../img/Group.svg'
import mask29 from '../img/Mask29.svg'
import payment from '../img/card-payment.svg'
import promo from '../img/Promo.svg'
import bounes from '../img/bounes.svg'


function Sidebar() {
  return (
    <div className='sidebar'>
      
       <a href="/">
        <img src={home} alt='' className='icon'/>
        </a>
        <img src={Group} alt='' className='icon'/>
        <img src={bell} alt='' className='icon'/>
        <img src={payment} alt='' className='icon'/>
        <img src={mask29} alt='' className='icon'/>
        <img src={promo} alt='' className='icon'/>
        <img src={bounes} alt='' className='icon'/>


    </div>
  )
}

export default Sidebar