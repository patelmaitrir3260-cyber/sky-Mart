import { useState } from "react";
import { createContext } from "react";

export let Myshope=createContext()

export const Myshopeprovider=({children})=>{
    const [items, setItems] = useState([])
    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem("cartItems"))||[])
    const [showCart, setShowCart] = useState(false)
  const [loginData, setLogindata] = useState(JSON.parse(localStorage.getItem("loginuser")));
   const [registerData, setRegisterData] = useState(JSON.parse(localStorage.getItem("user"))||[])
   const[nama,setNama]=useState(JSON.parse(localStorage.getItem("user"))||"name");

    let increment=(index)=>{
    let inc=cartItem.map((val)=>{
        return index===val.id?{...val,quanty:val.quanty+1}:val;

    })
    setCartItem(inc);
    localStorage.setItem("cartItems",JSON.stringify(inc))

    }
        let decrementitem=(index)=>{
      let dec=cartItem.map((val)=>{
        return index===val.id?{...val,quanty:val.quanty-1}:val;

    }).filter((elem)=>elem.quanty>=1)
    setCartItem(dec);
    localStorage.setItem("cartItems",JSON.stringify(dec))
    }
let total=cartItem.reduce((acc,val)=>{
  return acc+(val.price*val.quanty);
},0)
let iscart=function add(ind){
  cartItem.find((val)=>{
     val.id
  })
}
let Price=total.toFixed(2);
let deleteitem=(ind)=>{
   let remain=cartItem.filter((val)=>{
       return ind!==val.id
   })
   setCartItem(remain);
   localStorage.setItem("cartItems",JSON.stringify(remain))
}
 return <Myshope.Provider value={{items,setItems,cartItem, setCartItem,showCart, setShowCart,increment,decrementitem,Price,deleteitem,registerData, setRegisterData,setLogindata,loginData,nama}}>{children}</Myshope.Provider>
}