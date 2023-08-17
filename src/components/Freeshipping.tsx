import React from 'react';
import Link from "next/link";


const Free = () => {
    return(
        <>
        <div className="main bg-orange-500 mt-7 sm:mt-0 sm:h-60 ml-8 mr-10 min-w-screen">
            <div  className="text-center text-white font-extrabold font-mono sm:text-4xl py-5">
            FREE SHIPPING
            </div>
            <div className="text-center text-white font-serif py-3">
                ON ORDERS ABOVE $50 - USE COUPON CODE OVER50
            </div>        
            <div className="text-center py-6 space-x-5">
            <Link href="/plp" className="border-2 sm:px-11 py-1 bg-orange-500 border-spacing-1 text-white border-rose-100 hover:bg-orange-300 hover:text-black cursor-pointer">
            Shop Women
            </Link>
            <button className="border-2 sm:px-11 py-1 bg-orange-500 border-spacing-1 text-white border-rose-100 hover:bg-orange-300 hover:text-black">Shop Men</button>
            <button className="border-2 sm:px-11 py-1 bg-orange-500 border-spacing-1 text-white border-rose-100 hover:bg-orange-300 hover:text-black">Shop Sale</button>
            </div>
        </div>

        </>
    );
}
export default Free;