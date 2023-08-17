import Footer from "./Footer";
import Chat from "./Letschat";
import Navbar from "./Navbar";
import Social from "./Socialicon";
import React, { useContext } from 'react';
import Quantity from "./Quantity";
import { CartContext } from "@/contexts/CartContext";
// import Image from "next/image";
export default function Checkout() {
  const {cartItems, totalPrice} = useContext(CartContext)

    return(
        <>
        <Navbar/>
        <Social/>
        <Chat/>

         {/* grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

        {/* col1 */}

            <div className="md:ml-24 ml-16 lg:ml-28">
                <div>
                <h1 className="text-xl font-semibold">My cart</h1>
                {/* <hr className="h-10px w-2px bg-gray-500 border-gray-500"/> */}
                  <div>
                    {cartItems.map((e: any, i: any) => {
                      return (
                        <>
                          <Quantity e={e} i={i} />
                        </>
                      );
                    })}
                  </div>     
                </div>  
                <hr className="h-10px w-2px bg-gray-500 border-gray-500"/>
                <div className="flex py-2">
                <div className="w-5 h-5"><img src="Images/price-tag.png"/></div>
                <div className="text-orange-500">&nbsp;Enter The Promo Code</div>
                </div>
                <div className="flex">
                    <div className="h-5 w-5"><img src="Images/post-it.png" alt=""/></div>
                    <div className="text-orange-500">Add a Note</div>
                </div>  
            </div>

            {/* col2 */}

            <div className="lg:mr-72 md:mr-60 mr-20 sm:ml-0 ml-16 ">
                <div className="text-xl">Order summary</div>
                <hr className="h-10px w-2px bg-gray-500 border-gray-500 my-3"/>
                <div className="flex">
                    <div>Subtotal</div>
                    <div className="ml-64">{"$" + totalPrice}</div>
                </div>
                    <button className="underline py-1">Estimate Shopping</button>
                    <hr className="h-10px w-2px bg-gray-500 border-gray-500"/>
                    <div className="flex">
                        <div className="text-lg">Total</div>
                        <div className="ml-64">{"$" + totalPrice}</div>
                    </div>
                    <button className="px-10 text-center pr-10 py-1 bg-orange-500 border-spacing-1 hover:bg-orange-300 hover:text-black text-white my-4 w-80 h-12 mx-2">Checkout</button>
                    <div className="flex">
                        <div className="h-4 w-4 ml-24 py-1 cursor-pointer"><img src="Images/padlock.png" alt=""/></div>
                        <div className="cursor-pointer">&nbsp;Secure Checkout</div>
                    </div>
            </div>
        </div>    
        <Footer/>

        </>
    );
};