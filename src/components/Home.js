import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
import './Home.css'

export  function Availability(){
  return(
    <div className='mb-20 flex justify-between w-[55%] mt-10'>
      <button className='w-32 h-36 bg-boxwhite  box-shadow box-button'>
        <p className='text-black font-black text-base box-heading'>Sell</p>
        <p className='text-textgray text-[0.8rem] box-para'>sell drugs easily</p>
      </button>
      <button className='w-32 h-36 bg-boxwhite  box-shadow box-button'>
        <p className='text-black font-black text-base box-heading' >Buy</p>
        <p className='text-textgray text-[0.8rem] box-para' >buy drugs easily</p>
      </button>
      <button className='w-32 h-36 bg-boxwhite  box-shadow box-button'>
        <p className='text-black font-black text-base box-heading'>Enquire</p>
        <p className='text-textgray text-[0.8rem] box-para' >know about your drug</p>
      </button>
    </div>
  )
}
export  function Accessibility(){
  return(
    <div>Accessibility</div>
  )
}
export  function Support(){
  return(
    <div>Support</div>
  )
}

export default function Home() {

  const getStyle=({ isActive }) => ({
    color: isActive ? '#54D1B7' : '#ADB6C6' 
  })
 
  return (
    <div className='bg-background w-[74%] h-full'>
        <div className='w-[87%] m-auto'>
          <div class="lg:w-9/12 md:w-8/12 sm:w-7/12 w-full relative mt-10">
           <form class="flex items-center">
             <button class="absolute rounded-tl rounded-bl w-8 h-full flex justify-center items-center top-0 left-0">
               <i class="fas fa-search text-xl text-gray-400" aria-hidden="true"></i>
             </button>
             <input class="text-black px-10 w-full h-10 rounded-md" placeholder='Search' value=""/>
           </form>
          </div>
          <div className="mt-16">
            <p className='text-textblue font-extrabold  text-[1.5rem]'>Welcome to Drug Tracking System. </p>
            <p className='text-textgray font-medium '>get all the information about your drugs</p>
          </div>
          <div className="mt-16">
            <button className='bg-boxwhite text-boxblue hover:bg-boxblue hover:text-boxwhite w-[7.5rem] h-[4.2rem] mr-4 font-semibold rounded-sm box-shadow'>License</button>
            <button className='bg-boxwhite text-boxblue hover:bg-boxblue hover:text-boxwhite w-[7.5rem] h-[4.2rem] mr-4 font-semibold rounded-sm box-shadow'>Profile</button>
          </div>
          <div className="mt-24">
            <p className='text-textblue font-extrabold  text-[1.5rem]'>How do we help you?</p>
          </div>
          <div className="mt-8">
            <div className='flex justify-evenly w-[40%] font-bold'>
              <NavLink style={getStyle} to='/'>
                <div className='flex flex-col items-center'>
                  <span>Availability</span>
                  <p>●</p>
                </div>
              </NavLink>
              <NavLink style={getStyle} to='acc'>
                <div className='flex flex-col items-center'>
                  <span>Accessibility</span>
                  <p>●</p>
                </div>
              </NavLink>
              <NavLink style={getStyle} to='sup'>
                 <div className='flex flex-col items-center'>
                  <span>Support</span>
                  <p>●</p>
                </div>
              </NavLink>
            </div>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}
