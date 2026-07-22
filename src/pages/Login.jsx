import React, { useContext, useState } from 'react'
import { Zap,ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Myshope } from '../context/MyConext';

const Login = () => {
  let navigate=useNavigate();
 let {registerData,loginData, setLogindata}=useContext(Myshope);


  let {
    register,
    handleSubmit,
    formState:{errors},
    reset
  }=useForm()
  let getLogin=(data)=>{
   console.log(data);

    let user=registerData.find((val)=>{
      return val.Email===data.Email && val.Password===data.Password;
    })

    if(!user){ 
       alert("Invalid Email or Password 🤦‍♂️");
       reset();
       return;
    }

  setLogindata(user);
  alert("Login Successful 😎");
 localStorage.setItem("loginuser", JSON.stringify(user));
 reset()
 navigate('/home');
  }
  return (
    <div className='h-screen w-full flex'>
      <div className='w-[50%] bg-black text-white p-8 shadow-2xl shadow-amber-600 border-r'>
        <div className='flex gap-2 items-center mb-20'>
          <div className='h-[30px] w-[30px] rounded-xl flex justify-center items-center bg-amber-600'>
            <h1><Zap  color="#020203" strokeWidth={1.75} /></h1>
           
          </div>
          <h1 className='text-xl font-bold'>Sky<span className='text-amber-600'>Mart</span></h1>
        </div>
        <div className='flex flex-col gap-15'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-amber-600 uppercase'>Welcome back</h1>
            <h1 className='text-4xl font-bold'>Shope the future.</h1>
            <h1 className='text-4xl font-bold text-amber-600'>Today</h1>
            <p>Thousands of products,lightning-fast delivery,and<br/>prices that make your wallet happy.</p>
          </div>
          <div className='flex  gap-3'>
            <div className='w-44 h-20  rounded border border-white flex flex-col justify-center items-center '>
              <h1 className='text-amber-600 font-bold'>20K+</h1>
              <h1>Products</h1>
            </div>
                <div className='w-44 h-20  rounded border border-white  flex flex-col justify-center items-center '>
                   <h1 className='text-amber-600 font-bold'>50K+</h1>
              <h1>Users</h1>
                </div>
                    <div className='w-44 h-20  rounded border border-white  flex flex-col justify-center items-center '>
                       <h1 className='text-amber-600 font-bold'>4.9⭐</h1>
              <h1>Rating</h1>
                    </div>
          </div>
        </div>
      </div>
      <div className='w-[50%]  flex justify-center items-center'>
        <div className='w-[450px] p-8 shadow-2xl shadow-amber-600 bg-black border h-[400px] rounded text-white flex flex-col gap-8'>
         <div>
           <h1 className='text-xl font-bold mb-2'>Sign in</h1>
          <p>Enter your credentials to continue</p>
         </div>
          <form onSubmit={handleSubmit(getLogin)} className='flex flex-col gap-4' >
             
          
          <input
          {...register("Email")} 
          className='border p-2 rounded-xl border-amber-600 ' type="email" placeholder='Enter your email' />
          <input
          {...register("Password")}
           className='border p-2 rounded-xl border-amber-600 ' type="text"  placeholder='Enter your password'/>
          <button className='flex border justify-center p-2 rounded-lg bg-amber-600 text-xl font-bold'>Sign in<ArrowRight /></button>
          </form>
         <div className='flex w-full justify-center'>
           <p>Don't have an account?</p>
          <button onClick={()=>{
               navigate('/register');
          }} className='text-amber-600' >Create one</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Login
