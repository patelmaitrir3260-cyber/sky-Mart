import React, { useContext } from 'react'
import { Zap,ArrowRight,User,Mail,Lock } from "lucide-react";
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Myshope } from '../context/MyConext';

const Register = () => {
  let {registerData, setRegisterData}=useContext(Myshope);
    let navigate=useNavigate();
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let getData=(data)=>{
 console.log(data);
 let arr=[...registerData,data]
 setRegisterData(arr);
 console.log(registerData);
 
  localStorage.setItem("user",JSON.stringify(arr));
 navigate('/login')
 reset();
  }
  return (
    <div className='h-screen text-white w-full flex flex-col gap-4 justify-center items-center'>
          <div className='flex gap-2 items-center '>
               <div className='h-[30px] w-[30px] rounded-xl flex justify-center items-center bg-amber-600'>
                 <h1><Zap  color="#020203" strokeWidth={1.75} /></h1>
                
               </div>
               <h1 className='text-xl font-bold'>Sky<span className='text-amber-600'>Mart</span></h1>
             </div>
  <div  className='bg-transparent p-5 rounded-lg text-white border min-h-[430px] w-[400px] flex flex-col gap-7' >
    <div>
        <h1 className='text-xl font-bold text-amber-600 mb-2'>Create account</h1>
        <p>Join SkyMart and start shopping</p>
    </div>
    <form onSubmit={handleSubmit(getData)} className='flex flex-col gap-4' >
       <div className="relative ">
  <User
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
  {...register("Name",{
    required:"full name is required"
  })}
    type="text"
    placeholder="Full name"
    className="w-full pl-10 pr-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder:text-gray-500"
  />
</div>
{errors.Name && <p className='text-red-600'>{errors.Name.message}</p>}
<div className="relative ">
  <Mail 
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
    type="email"
    placeholder="Email address"
    {...register("Email",{
        required:"Email is required"
    })}
    className="w-full pl-10 pr-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder:text-gray-500"
  />
</div>
{errors.Email && <p className='text-red-600'>{errors.Email.message}</p>}
<div className="relative ">
  <Lock 
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
  {...register("Password",{
    required:"Password is required",
    minLength:{
        value:6,
        message:"minimum 6 char required"
    }
  })}
    type="text"
    placeholder="Password(min 6 chars)"

    className="w-full pl-10 pr-3 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder:text-gray-500"
  />
</div>
{errors.Password && <p className='text-red-600'>{errors.Password.message}</p>}
<button className='flex justify-center bg-amber-600 p-2 rounded-xl text-center font-bold '><span className='text-lg'>Create Account</span> <ArrowRight /> </button>
    </form>
    <div className='w-full flex justify-center'>
        <h1>Already have an account?</h1>
        <button
        onClick={()=>{
            navigate('/login');
        }} 
         className='text-amber-600'>Sign in</button>
    </div>
  </div>
    </div>
  )
}

export default Register
