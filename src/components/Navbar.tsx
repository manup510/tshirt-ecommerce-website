import Link from "next/link";
import {FaShoppingBag} from "react-icons/fa";
import { CartContext } from "@/contexts/CartContext";
import React, { useContext } from "react";

// import Img1 from './../Images/54481.png';

const Navbar = () => {
    const { cartTotalItem } = useContext(CartContext);
    return(
        <>
        <div className="navbar">
            <div className="ml-8 py-6">
                <div className="min-[827px]:flex">
                <ul className="flex space-x-2 relative">
                <li className="logo bg-black text-white font-bold font-serif cursor-pointer">N O U S</li>
                <img src="Images/54481.png" alt="" className="w-4 h-4 my-1"/>
                <li className="cursor-pointer"><input type="text" placeholder="Search..."/></li>
                </ul>
                <div className="grid sm:grid-cols-8 min-[286px]:grid-cols-4 min-[286px]:grid-rows-2 max-[286px]:grid-cols-3 max-[286px]:grid-rows-3 right-0 gap-2 absolute">
                <div className="cursor-pointer text-black dark:text-black hover:text-orange-400">
                <Link href="/" >Shop All</Link>
                </div>
                <div> 
                <Link href="/plp" className="text-black dark:text-black hover:text-orange-400 cursor-pointer">
                      Women
                </Link>
                </div> 
                <div className="cursor-pointer">Men</div>
                <div className="cursor-pointer">Sale</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">contact</div>
                <div className="cursor-pointer h-5 w-20 flex max-[286px]:col-span-2">
                <img src="Images/user-interface.png"alt=""/>&nbsp;Log in</div>
                {/* <div className="cursor-pointer h-5 w-20 flex"><img src="Images/shopping-bag.png"alt=""/></div> */}
                <div><Link href="/checkout" className="hover:text-orange-400">
                  <button className="relative flex items-center w-8 h-8 border border-black">
                    <FaShoppingBag className="w-10" />
                    <div className="absolute top-0 right-0 pr-1 pl-1 pt-0.5 pb-0.5 bg-red-500 text-white text-xs font-bold rounded-full transform translate-x-1/2 -translate-y-1/2 mt-6">
                      {cartTotalItem}
                    </div>
                  </button>
                    </Link></div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Navbar; 