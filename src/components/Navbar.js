import React from 'react'
import { NavLink } from 'react-router-dom'
import Dts from '../img/DtS.svg'

export default function Navbar() {
    const getStyle=({ isActive }) => ({
        color: isActive ? 'white' : '#808080',
        background: isActive ? '#54D1B7' : 'white',
    })

    return (
            <nav className='flex flex-col h-[20rem] w-[64px] justify-between'>
                <img className='h-[40px] w-[48px] m-auto' src={Dts} />
                <ul className='flex flex-col justify-evenly'>
                    <NavLink to='/' style={getStyle} className='w-[64px] h-[58px] flex justify-center items-center' ><i className="fa-solid fa-house text-[1.5rem] "></i></NavLink> 
                    <NavLink to='/license' style={getStyle} className='w-[64px] h-[58px] flex justify-center items-center'><i className="fa-solid fa-id-badge text-[1.5rem] "></i></NavLink>
                    <NavLink to='/profile' style={getStyle} className='w-[64px] h-[58px] flex justify-center items-center'><i class="fa-solid fa-circle-user text-[1.5rem] "></i></NavLink>
                </ul>
            </nav>
    )
}
