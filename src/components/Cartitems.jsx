import React, { useContext } from 'react'
import { Myshope } from '../context/MyConext'
import Cart from './Cart';
import { ArrowRight,ShoppingBag,X  } from 'lucide-react';

const Cartitems = () => {
    let {showCart, setShowCart,cartItem, setCartItem}=useContext(Myshope);
    let total=cartItem.reduce((acc,val)=>{
  return acc+(val.price*val.quanty);
},0)
let Price=total.toFixed(2);

  return (
    <div className='h-screen'>
       <div className='flex justify-between items-center border-b p-4 mb-4 '>
        <div className='flex items-center  gap-3'>
              <h1 className='flex items-center gap-2'><ShoppingBag color="#b24c15" /><span className='text-2xl font-bold'>Cart</span></h1>
          <div id='box5' className='border px-3 rounded-2xl flex gap-1 bg-amber-600'><span>{cartItem.length}</span>items</div>
        </div>
        <div onClick={()=>
            setShowCart(false)
        }><X color="#b24c15" /></div>
        
      </div >
       <div className=' h-[60%] mb-2 overflow-y-auto flex flex-col gap-2'>
         {cartItem.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
          <p className="text-gray-500 mt-2">
            Add some products to your cart.
          </p>
        </div>
      ) : (<div className=' h-[100%] mb-2 overflow-y-auto flex flex-col gap-2'> {cartItem.map((val)=>{
            return <Cart elem={val}/>
         })}  </div>)}
         
       </div>
       <hr />
          <div className='w-full flex flex-col gap-2 p-2 '>
           
             <div className='flex justify-between mb-4'>
                <h1 className='text-gray-400'>Total</h1>
                <h1 className=' text-3xl font-bold'>${Price}</h1>
             </div>
             <button onClick={()=>setShowCart(false)} className='bg-amber-600 flex items-center justify-center p-2 rounded-2xl cursor-pointer'>Checkout<ArrowRight/></button>
          </div>
    </div>
  )
}

export default Cartitems
