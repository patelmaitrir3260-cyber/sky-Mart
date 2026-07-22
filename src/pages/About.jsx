import React from 'react'
import Navbar from '../components/Navbar'
import { Zap,Box,Users,Van,ArrowRight,Star,ShieldCheck,HeartHandshake } from 'lucide-react'
import { useNavigate } from 'react-router'

const About = () => {
    let navigate=useNavigate();
  return (
    <div className='min-h-screen text-white px-13 py-3 flex flex-col w-full gap-10'>
      <Navbar/>
    <div className='px-28 flex flex-col gap-6 justify-center'>
         <div className='flex flex-col justify-between items-center gap-5'>
           
          <div className='h-[50px] w-[50px] rounded-xl flex justify-center items-center bg-amber-600'>
            <h1><Zap  color="#020203" strokeWidth={1.75} /></h1></div>
            <h1 className='text-4xl flex gap-3 font-bold'>About<span className='text-amber-600'>SkyMart</span></h1>
            <p className='text-center text-lg text-gray-400'>SkyMart is a next-generation e-commerce platform built to make online <br></br> shopping fast, fair, and enjoyable — for everyone.</p>
         </div>
        
        <div className='grid grid-cols-4 h-40  gap-3 px-28 py-4 '>
            <div className=' rounded-2xl border-2 flex items-center flex-col justify-center'>
                <Box color="#863e0e" />
                <h1 className='text-3xl font-bold'>20K+</h1>
                <p className='text-gray-400'>Products</p>
            </div>
            <div className='rounded-2xl border-2 flex items-center flex-col justify-center'>
                 <Users color="#863e0e" />
                <h1 className='text-3xl font-bold'>50K+</h1>
                <p className='text-gray-400'>Happy Customers</p>
            </div>
            <div className='rounded-2xl border-2 flex items-center flex-col justify-center'>
                 <Star color="#863e0e" />
                <h1 className='text-3xl font-bold'>4.9</h1>
                <p className='text-gray-400'>Avg.Rating</p>
            </div>
            <div className='rounded-2xl border-2 flex items-center flex-col justify-center'>
                 <Van color="#863e0e" />
                <h1 className='text-3xl font-bold'>99%</h1>
                <p className='text-gray-400'>On-time Delivery</p>
            </div>
        </div>

        <div className='h-70 overflow-auto ml-24 mr-24 px-9 py-7 p rounded-2xl border-2 text-white flex flex-col gap-3'>
       <h1 className='text-3xl font-bold'>Our Story</h1>
       <p className='text-gray-400'>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually enjoyable?</p>
       <p className='text-gray-400'>Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.</p>
       <p className='text-gray-400'>We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</p>
        </div>

       <div className='flex justify-center ml-24 mr-24 h-70  flex-col ' >
         <h1 className='text-3xl font-bold text-center' >What We Stand For</h1>
         <div className='grid grid-cols-2 grid-rows-2 h-70 gap-3 p-3'>
            <div className=' border-2 rounded-2xl p-3 flex gap-3'>
                <div className='h-10 w-10 bg-[#281F10] rounded-2xl flex justify-center items-center '>
                  <ShieldCheck color="#863e0e" />
                </div>
               <div>
                 <h1 className='text-xl font-bold'>Trust</h1>
                 <p className='text-gray-400'>Every product is verified for quality<br></br>
                 and authnticity before listing.</p>
               </div>
            </div>
            <div className=' border-2 rounded-2xl flex gap-3 p-3'>
                 <div className='h-10 w-10 bg-[#281F10] rounded-2xl flex justify-center items-center '>
                  <Van color="#863e0e" />
                </div>
               <div>
                 <h1 className='text-xl font-bold'>Speed</h1>
                 <p className='text-gray-400'>We obsess over delivery times so your orders arrive<br></br>
                 when promised.</p>
               </div>
            </div>
            <div className=' border-2 rounded-2xl flex gap-3 p-3'>
                 <div className='h-10 w-10 bg-[#281F10] rounded-2xl flex justify-center items-center '>
               <HeartHandshake color="#863e0e" />
                </div>
               <div>
                 <h1 className='text-xl font-bold'>Community</h1>
                 <p className='text-gray-400'>Built around real customer feedback, not just business<br></br>
                metrics.</p>
               </div>
            </div>
            <div className='border-2 rounded-2xl flex gap-3 p-3'>
                 <div className='h-10 w-10 bg-[#281F10] rounded-2xl flex justify-center items-center '>
                  <Star color="#863e0e" />
                </div>
               <div>
                 <h1 className='text-xl font-bold'>Quality</h1>
                 <p className='text-gray-400'>We curate the best — no filler, no junk, just great<br></br>
                products.</p>
               </div>
            </div>
         </div>
       </div>
     <div className='flex justify-center'>
        <h1 className='text-3xl font-bold' >Meet the Team</h1>
     </div>
     <div className='grid grid-cols-4 h-40  gap-3 px-28 py-4 ' >
        <div className='border-2 rounded-2xl flex flex-col justify-center items-center '>
            <div className='h-10 w-10 text-black rounded-2xl flex justify-center items-center bg-[#C8F400]'>A</div>
            <h1 className='text-sm '>Aryan Shah</h1>
            <h1 className='text-gray-400'>Founder & CEO</h1>
        </div>
        <div className='border-2 rounded-2xl flex flex-col justify-center items-center '>
             <div className='h-10 w-10  rounded-2xl flex justify-center items-center bg-[#3B82F6]'>P</div>
            <h1 className='text-sm '>Priya Mehta</h1>
            <h1 className='text-gray-400'>Head of Product</h1>
        </div>
        <div className='border-2 rounded-2xl flex flex-col justify-center items-center '>
             <div className='h-10 w-10  rounded-2xl flex justify-center items-center bg-[#A855F7]'>R</div>
            <h1 className='text-sm '>Rohan Verma</h1>
            <h1 className='text-gray-400'>Lead Engineer</h1>
        </div>
        <div className='border-2 rounded-2xl flex flex-col justify-center items-center '>
             <div className='h-10 w-10  rounded-2xl flex justify-center items-center bg-[#F43F5E]'>S</div>
            <h1 className='text-sm '>Sneha Kapoor</h1>
            <h1 className='text-gray-400'>Design Director</h1>
        </div>

     </div>
 
 <div className='h-50  ml-24 mr-24 border border-amber-600 rounded-2xl flex flex-col gap-3 items-center justify-center'>
     <h1 className='text-3xl font-bold font-sans'>Ready to shop?</h1>
     <p className='text-gray-400'>Explore thousands of products at unbeatable prices.</p>
     <button 
     onClick={()=>{
        navigate('/products')
     }}
      className='flex text-center border-0 rounded-2xl bg-amber-600 p-3 font-semibold'>Browser Products<ArrowRight/></button>
 </div>
       </div>
    </div>
  )
}

export default About
