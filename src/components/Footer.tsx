import React from 'react'

const Footer = () => {
    return(
    <>
        {/* <div className="navbar"> */}
          <div className="ml-8 mr-8 sm:px-40 lg:px-80 py-16 space-x-2 md:space-x-8 bg-black min-[390px]:flex flex-shrink-0 ">
            <ul className="text-white font-thin text-sm ">
                <li className="cursor-pointer">Shop All</li><br/>
                <li className="cursor-pointer">About</li><br/>
                <li className="cursor-pointer">Contact</li><br/>
                <li className="cursor-pointer">Stocklists</li><br/>
            </ul>
            <ul className="text-white font-thin text-sm">
                <li className="cursor-pointer">FAQ</li><br/>
                <li className="cursor-pointer">Shipping & Returns</li><br/>
                <li className="cursor-pointer">Store Policy</li><br/>
                <li className="cursor-pointer">Payment Methods</li>
            </ul>
            <ul className="text-white font-thin text-sm">
                <li className="cursor-pointer">Instagram</li><br/>
                <li className="cursor-pointer">Pinterest</li><br/>
                <li className="cursor-pointer">Facebook</li><br/>
                <li className="cursor-pointer">Twitter</li>
            </ul>
            <ul className="text-white">
                <li className="font-bold">Join our mailng list</li>
                <li className="font-thin text-sm">and get 10% off</li>
                <li >
                    <input type="text" placeholder="Enter your email here*" className="border-2 my-2 px-2 pr-8 py-1 text-sm font-semibold border-spacing-1 border-white hover:bg-orange-300 hover:text-slate-500"/>
                </li>
                <li>
                    <button className="px-10 text-center pr-10 py-1 bg-orange-500 border-spacing-1 hover:bg-orange-300 hover:text-black">Subscribe Now</button>
                </li>
            </ul>
         </div>
        {/* </div> */}
        <div className="flex">
        <ul className="w-4 h-4 ml-8 my-0.5">
            <img src="photos (1)/WdjyD0-copyright-symbol-images-png.png" alt=""/>
        </ul>
        <ul className="flex text-sm font-thin">    
            <li> 2035 by NOUS.Powered and secured by&nbsp;</li>
            <li className="underline">Wix</li>
        </ul>
        </div>
    </>
    );
}

export default Footer;