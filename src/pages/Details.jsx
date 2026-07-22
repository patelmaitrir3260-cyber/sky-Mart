import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import {ArrowLeft, ArrowRight,Check} from 'lucide-react'
import { Myshope } from '../context/MyConext';

const Details = () => {
const [detail, setDetail] = useState({});
 let{setCartItem,cartItem}=useContext(Myshope);
let navigate=useNavigate()
let {id}=useParams();
let plu=Number(id)
let getdetails=async ()=>{
  let res=await axios(`https://fakestoreapi.com/products/${id}`)
  setDetail(res.data)
}
useEffect(()=>{
getdetails();
},[id])
const store=(product)=>{
    let data=[...cartItem,{...product,quanty:1}];
    setCartItem(data)
    console.log(data);
    
    localStorage.setItem("cartItems",JSON.stringify(data))
  }

let isCart=cartItem.find((val)=>{
  return detail.id===val.id
})


  return (

   <div className="max-w-6xl mx-auto p-8">
    <div className='flex justify-between '>
        <h1 className="text-3xl font-bold mb-8 text-white">🛒 Product Details</h1>
        <button 
        onClick={()=>{
          navigate('/products')
        }}
         className='text-gray-400 flex cursor-pointer'><ArrowLeft />Products</button>
    </div>

      <div className="bg-black text-white shadow-xl border-2 rounded-2xl p-6 flex flex-col md:flex-row gap-8">

        {/* Product Image */}
        <div className="w-full md:w-1/3 bg-gray-100 rounded-xl flex justify-center items-center p-6">
          <img
            src={detail.image}
            alt={detail.title}
            className="h-72 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">

          <div>
            {/* Category */}
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm capitalize">
              {detail.category}
            </span>

            {/* Title */}
            <h2 className="text-3xl font-bold mt-4">
              {detail.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                ⭐ {detail.rating?.rate || 4.5}
              </span>

              <span className="text-gray-500">
                ({detail.rating?.count || 0} Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-5 leading-7">
              {detail.description}
            </p>

            {/* Extra Details */}
            <div className="mt-6 border rounded-xl p-4 space-y-3">

              <div className="flex justify-between">
                <span className="font-medium">Brand</span>
                <span>Fashion Store</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Availability</span>
                <span className="text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Shipping</span>
                <span>🚚 Free Delivery</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Return Policy</span>
                <span>7 Days Easy Return</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Warranty</span>
                <span>1 Year Warranty</span>
              </div>

            </div>

            {/* Price */}
            {/* <h3 className="text-4xl font-bold text-green-600 mt-6">
              ${detail.price.toFixed(2)}
            </h3> */}
          </div>

          {/* Quantity + Total */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">

            <div>
              <p className="font-semibold mb-2">Quantity</p>

              <div className="flex items-center border border-amber-700 rounded-lg overflow-hidden">

                <button
                onClick={(()=>{
                  if(id>1){
                  navigate(`/details/${id-1}`)}
                })} 
                 className="px-4 py-2  hover:bg-gray-300 flex">
                 <ArrowLeft/> Prev
                </button>

                

                <button
                 onClick={(()=>{
                  if(plu<20){
                  navigate(`/details/${plu+1}`)
                  }
                })}  
                 className="px-4 py-2  flex  bg-amber-700 hover:bg-gray-300">
                 <ArrowRight/> Next
                </button>

              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Total</p>

              <h3 className="text-2xl font-bold text-blue-600">
                $
                {(
                  detail.price * (detail.quantity || 1)
                ).toFixed(2)}
              </h3>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <button
            onClick={()=>{
                navigate('/products')
            }} 
             className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition">
              Remove
            </button>
          {isCart?
            <button   className="flex-1 bg-[#133b229a] border border-[#0b4220] hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition">
             <div className='flex justify-center text-[#47D87C]'> <Check /><h1>Added</h1></div>
            </button>
          :
            <button
            onClick={()=>{setCartItem([...cartItem,{...detail,quanty:1}]);add(detail.id)}} 
             className="flex-1 bg-black border hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition">
              Buy Now
            </button>}

        
            

          </div>

        </div>
      </div>
    </div>
  );
};

export default Details
