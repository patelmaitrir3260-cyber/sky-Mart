import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import {ArrowRight,Plus,IndianRupee,Box,TrendingUp,Star,Tag} from 'lucide-react'
import { Myshope } from '../context/MyConext'
import Cartitems from '../components/Cartitems'
import { useNavigate } from 'react-router'
const Home = () => {
    let {cartItem,Price,loginData,showCart, setShowCart,registerData}=useContext(Myshope);
    let navigate=useNavigate();
  return (
    <div className='min-h-screen'>
         <div className={`h-screen text-white px-13 flex flex-col w-full gap-10 
    ${showCart ? "opacity-10":"opacity-100"}`}>
      <Navbar/>

      <div className='h-[50%] flex justify-between ml-6 mr-6 rounded-xl border-2 border-white text-white py-18 px-9 '>
             <div className='flex flex-col gap-4'>
               <div>
                 <h1 className='text-4xl font-bold'>Welcome back,</h1>
                <h1 className='text-4xl font-bold text-amber-600'> {loginData?.Name}</h1>
               </div>
                <p>Discover today's picks-hand-curated products across <br></br> electronic, fashion,and more.</p>
                <div className='flex gap-2'>
                    <button 
                    onClick={()=>{
                        navigate('/products')
                    }}
                    className='flex border px-3 py-2 flex items-center rounded-xl bg-amber-600 font-bold cursor-pointer '>Shop now<ArrowRight /></button>
                    <button
                      onClick={()=>{
                        navigate('/products')
                    }} 
                     className='border px-3 py-2 rounded-xl border-amber-600 font-bold cursor-pointer'>View All Products</button>
                </div>
             </div>
             <div className='flex flex-col gap-3'>
                <div id='box-4'
 className='h-23 bg-amber-800  border border border-amber-800 w-37 rounded-xl flex flex-col justify-center items-center  '>
                    <h1 className='flex items-center' ><span className='text-2xl font-bold'>20</span><Plus strokeWidth={3.5} /></h1>
                    <p>Products Available</p>
                </div>
                <div className='h-23  border border border-amber-800 w-37 rounded-xl flex flex-col justify-center items-center  '>
                    <h1 className='flex items-center' ><span className='text-2xl font-bold'>Free</span></h1>
                    <p className='flex items-center'>Delivery on <IndianRupee size={14} strokeWidth={1.5} /><span>999+</span></p>
                </div>
             </div>
      </div>

      <div className='grid grid-cols-4 gap-3  ml-6 mr-6 '>
        <div  className='h-30  p-4 gap-2 rounded-2xl flex border-2 '>
            <div id='box' className='w-10 h-10  bg-lime-200 opacity-50 rounded-xl flex items-center justify-center text-yellow-600'>
                <Box size={17} strokeWidth={3.5} />
            </div>
            <div>
                <h1 className='text-xl font-bold'>{cartItem.length}</h1>
                <h1 className='font-bold'>Cart Items</h1>
                <p>In your bag</p>
            </div>
        </div>
        <div className='h-30 border-2 flex gap-2 p-4 rounded-2xl'>
              <div id='box1' className='w-10 h-10 bg-red-300 rounded-xl flex items-center justify-center'>
              <TrendingUp size={16} strokeWidth={3.5} />
            </div>
            <div>
                <h1 className='text-xl font-bold'>$<span>{Price}</span></h1>
                <h1 className='font-bold'>Cart Items</h1>
                <p>Ready to checkout</p>
            </div></div>
        <div  className='min-h-30 border-2 flex gap-2 p-4 rounded-2xl '>  <div id='box2' className='w-10 h-10 bg-red-300 rounded-xl flex items-center justify-center'>
                <Star size={16} strokeWidth={2.5} />
            </div>
            <div>
                <h1 className='text-xl font-bold'>5</h1>
                <h1 className='font-bold'>Top Products</h1>
                <p>Highly rated</p>
            </div></div>
        <div className='h-30 flex gap-2  border-2 p-4 rounded-2xl'>  
            <div id='box3' className=' w-10 h-10 bg-red-300 rounded-xl flex items-center justify-center'>
                <Tag size={16} strokeWidth={2.5} />
            </div>
            <div>
                <h1 className='text-xl font-bold'>6</h1>
                <h1 className='font-bold'>Categories</h1>
                <p>To explore</p>
            </div></div>
      </div>
    
         </div>
         <div className={`fixed  h-screen overflow-y-auto border-b-2 top-0 right-0 bg-black text-white p-3 w-100 border-l-2 border-white h-screen 
       ${showCart?"translate-x-0" : "translate-x-full"} `}>
       
       <Cartitems/>
          
         </div>
        </div>
  )
}

export default Home

