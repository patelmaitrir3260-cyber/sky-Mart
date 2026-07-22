import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Search,ShoppingBag,X,ArrowRight } from 'lucide-react'
import axios from 'axios'
import { Myshope } from '../context/MyConext'
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'
import Cartitems from '../components/Cartitems'

const Shope = () => {
    
    let {items,setItems,showCart,setShowCart,cartItem}=useContext(Myshope);
        const [searchitem, setSearchitem] = useState("All categories")
     let getData= async()=>{
       let res= await axios('https://fakestoreapi.com/products')
       console.log(res.data);
       setItems(res.data)
       console.log(items);
     }
useEffect(()=>{
    getData()
},[])

let total=cartItem.reduce((acc,val)=>{
  return acc+(val.price*val.quanty);
},0)
let Price=total.toFixed(2);


  return (
    <div className='min-h-screen'>
        
        <div className={`min-h-screen  text-white px-13 flex flex-col w-full gap-7
      ${showCart ? "opacity-10":"opacity-100"}`} >
        
        <Navbar/>
        <div>
            <h1 className='text-4xl font-bold'>All Products</h1>
        <p className='text-gray-400'>50 products found</p>
        </div>
        <div className=' w-full grid grid-cols-2 gap-2  p-3 relative'>
           <div className='flex  gap-2 border border-gray-600 bg-gray-800 p-2 rounded-xl '>
            <Search />
             <input className='border-0' type="text" placeholder='Search products....' />
           </div>
          <div >
             <select
             onChange={(elem)=>{
                 setSearchitem(elem.target.value)
                 console.log(searchitem);
                 
                  
             }}
              className='border border-gray-600 px-7 py-3 rounded-2xl bg-black text-white'>
            <option value="All categories">All categories</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
           </select>
          </div>
        </div>


        <div className='min-h-screen grid grid-cols-4 gap-2'>
             {(searchitem ==="All categories")&& items.map((val)=>{
                const iscart=cartItem.find((elem)=>{
                   return val.id===elem.id
                })
               
                
                return <ProductCard product={val} iscart={iscart}/>
             })}

  {(searchitem === "men's clothing") && items.filter((val) => val.category === "men's clothing")
    .map((val) => {
       const iscart=cartItem.find((elem)=>{
                   return val.id===elem.id
                })
     return  <ProductCard key={val.id} product={val} iscart={iscart} />
    })
}

 {(searchitem === "jewelery") && items
    .filter((val) => val.category === "jewelery")
    .map((val) => {
       const iscart=cartItem.find((elem)=>{
                   return val.id===elem.id
                })
     return  <ProductCard key={val.id} product={val} iscart={iscart} />
})
}

{(searchitem === "electronics") && items
    .filter((val) => val.category === "electronics")
    .map((val) => {
     const iscart=cartItem.find((elem)=>{
                   return val.id===elem.id
                })
     return  <ProductCard key={val.id} product={val} iscart={iscart} />
})
}

{(searchitem === "women's clothing") && items
    .filter((val) => val.category === "women's clothing")
    .map((val) => {
     const iscart=cartItem.find((elem)=>{
                   return val.id===elem.id
                })
     return  <ProductCard key={val.id} product={val} iscart={iscart} />
})
}
        </div>
        </div>
       <div className={`fixed  h-screen overflow-y-auto border-b-2 top-0 right-0 bg-black text-white p-3 w-100 border-l-2 border-white h-screen 
       ${showCart?"translate-x-0" : "translate-x-full"} `}>
       <Cartitems/>
       </div>
  </div>
  )
}

export default Shope
