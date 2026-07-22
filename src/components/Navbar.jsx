import React, { useContext, useState } from 'react'
import { Zap,ArrowRight,ShoppingCart,LogOut } from "lucide-react";
import { useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router';
import { Myshope } from '../context/MyConext';

const Navbar = () => {
 let{setShowCart,registerData,loginData}= useContext(Myshope);

let navigate=useNavigate();
  return (
    <div className='h-20 p-4 flex justify-between items-center '>
       <div className='flex gap-2 items-center '>
          <div className='h-[30px] w-[30px] rounded-xl flex justify-center items-center bg-amber-600'>
            <h1><Zap  color="#020203" strokeWidth={1.75} /></h1>
           
          </div>
          <h1 className='text-xl font-bold'>Sky<span className='text-amber-600'>Mart</span></h1>
        </div>
        <div className='flex gap-3 items-center '>
            <h1
            onClick={()=>{
              navigate('/home')
            }} 
             className='hover:text-amber-600 cursor-pointer'>Home</h1>
            <h1
            onClick={()=>{
              navigate('/products')
            }} 
             className='hover:text-amber-600 cursor-pointer'>Shope</h1>
            <h1
            onClick={()=>{
              navigate('/about')
            }} 
             className='hover:text-amber-600 cursor-pointer'>About</h1>
        </div>
        <div className='flex gap-2'>
           <div className='w-30 min-h-10 border text-center border-amber-600 text-white font-bold flex items-center justify-center p-2 rounded-xl wrap-break-word'><h1>  {loginData?.Name}</h1></div>
            <button onClick={()=>setShowCart(true)} className='w-10 h-10 border flex items-center justify-center rounded-xl cursor-pointer'><ShoppingCart /></button>
            <button onClick={()=>{
              navigate('/login')
            }

            } className='w-10 h-10 border flex items-center justify-center rounded-xl cursor-pointer'><LogOut /></button>
        </div>
    </div>
  )
}

export default Navbar
