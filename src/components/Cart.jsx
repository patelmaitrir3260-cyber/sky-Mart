import React, { useContext } from 'react'
import { Minus,Plus,Trash2 } from 'lucide-react'
import { Myshope } from '../context/MyConext'

const Cart = ({elem}) => {
    let{increment,decrementitem,deleteitem}=useContext(Myshope);
  return (
    <div>
      <div className='h-[150px]  p-3 flex gap-2 border-2'>
         <div className='h-25 w-30 bg-amber-950 rounded object-center'>
            <img className='h-25 w-30' src={elem.image
} alt="" />
         </div>
         <div className='flex flex-col gap-2'>
            <h1>{elem.category}</h1>
            <h1 className='font-bold text-xl text-amber-600 mb-5'>$<span>{elem.
price}</span></h1>
           <div className='flex items-center gap-20 justify-between'>
             <div className="flex  items-center gap-3">

            <button onClick={()=>decrementitem(elem.id)} className="p-1 rounded-md border-2 hover:bg-orange-500">
              <Minus size={16} />
            </button>

            <span className="font-semibold">{elem.quanty
}</span>

            <button onClick={()=>increment(elem.id)} className="p-1 rounded-md border-2 text-white hover:bg-orange-600">
              <Plus size={16} />
            </button>

          </div>
          <div
             onClick={()=>deleteitem(elem.id)}
           className=''><Trash2 color="#b24c15" /></div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Cart
