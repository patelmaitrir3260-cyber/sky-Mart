import React, { useContext } from "react";
import { Myshope } from "../context/MyConext";
import { Check } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product,iscart }) => {
  
  let {cartItem, setCartItem,setShowCart}=useContext(Myshope);
 let navigate= useNavigate();
  const store=(product)=>{
    let data=[...cartItem,{...product,quanty:1}];
    setCartItem(data)
    console.log(data);
    
    localStorage.setItem("cartItems",JSON.stringify(data))
  }
  return (
    <div className="border-2 border-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Product Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center p-6 overflow-hidden">
        <img
        onClick={()=>{
          navigate(`/details/${product.id}`)
        }}
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">

        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-2xl font-bold text-green-600">
              ${product.price}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-yellow-500 font-semibold">
                ⭐ {product.rating.rate}
            </p>
            <span className="text-xs text-gray-500">
              {product.rating.count} Reviews
            </span>
          </div>

        </div>

        {iscart ?
         <button id="btn"
       
         className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer flex justify-center">
          Added <Check />
        </button>: <button
        onClick={()=>{store(product);setShowCart(true)}} 
         className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          Add To Cart
        </button>}

       

      </div>
    </div>
  );
};

export default ProductCard;