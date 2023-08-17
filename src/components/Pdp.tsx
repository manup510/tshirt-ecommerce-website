import React from 'react';
import Chat from "./Letschat";
import Navbar from "./Navbar";
import Social from "./Socialicon";
import Footer from "./Footer";
import ProDeails from './Productt';

const pdp = () => {
    return(
        <>
        <Navbar/>
        <Social/>
        <Chat/>
        {/* <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 my-8 sm:my-0 mx-14">
                <div className="sm:ml-20 md:ml-28 lg:ml-52">
                    <div className="flex">
                      Home/Women/
                      <div className="text-gray-400">I'm a Product</div>
                    </div>
                    <div className="mt-16">
                    <img src="Images\women\Bonkerscorner_Wolverine_01-1.webp"alt=""/></div>
                    <div className="flex w-40 my-2">
                        <div className="border-orange-500 border-2">
                            <img src="Images\women\Bonkerscorner_Wolverine_02-1.webp"alt=""/>
                        </div>
                        <div className="mx-2">
                            <img src="Images\women\Bonkerscorner_Wolverine_02-1.webp"alt=""/>
                        </div>
                        <div >    
                            <img src="Images\women\Bonkerscorner_Wolverine_02-1.webp" alt=""/>
                        </div>
                        <div className="mx-2">    
                            <img src="Images\women\Bonkerscorner_Wolverine_02-1.webp" alt=""/>
                        </div>
                    </div>
                    <div>I'm a product description.I'm a great place to add more details to your
                         product such as sizing, material, care, instructions and cleaning instructions</div>
                </div>
                <div className="mr-5 sm:mr-10 md:mr-20 lg:mr-80">
                    <div className="sm:ml-28 md:ml-32 mg:ml-48 cursor-pointer">&lt;PREV | NEXT&gt;</div>
                    <div className="font-bold font-sans text-4xl mt-16">I'm a product</div>
                    <div className="text-xs">SKU: 0011</div>
                    <div className="text-orange-500 text-xl mt-4 font-mono"><del>$42</del>&nbsp;$39.90</div>
                    <div>Color</div>
                    <div className="flex mt-2 mb-3">
                        <button className="rounded-full bg-black w-4 h-4"></button>
                        <button className="rounded-full mx-2 bg-cyan-900 w-4 h-4"></button> 
                    </div>
                    <div className="text-xs font-semibold">Size</div>
                    <button className="w-60 mt-1 h-8 border-slate-500 border-2 text-slate-800 text-left border-spacing-1 px-2">Select</button>
                    <div className="text-xs font-semibold mt-2">Quantity</div>
                    <input type="number" placeholder="1" className="text-slate-500 w-12 h-8 border-2 mt-1 border-slate-500"/><br/>
                    <div className="flex">
                    <button className="bg-orange-500 h-8 mt-4 w-52 text-white">Add To Cart</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 border-orange-500 border-2 text-orange-500 mt-4 mx-2 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>  
                    <div><button className="bg-black h-8 mt-4 w-60 text-white">Buy Now</button></div>
                    <div className="my-2">PRODUCT INFO </div>
                    <div className="mb-3">I'm a product detail. I'm a great place to add more information about your product suc as sizing, material, care, claening instructions. This is also a great space to write what makes this product
                        special and how your customers can benifit from this item.
                    </div>
                    <hr className="h-10px w-2px bg-gray-500 border-gray-500"/>
                    <div className="my-2">RETURN & REFUND POLICY</div>
                    <hr className="h-10px w-2px bg-gray-500 border-gray-500"/>
                    <div className="my-2">SHIPPING INFO</div>
                    <div className="h-4 w-4 my-4"><img src="Images\whatsapp (1).png" alt=""/></div>
                </div>  
            </div> */}
            <ProDeails/>
            <div className="text-4xl font-bold text-center my-16">RELATED PRODUCTS</div>
            <div className="flex mb-10">
                <div><button className="lg:text-4xl lg:mt-28 lg:ml-48 md:text-2xl md:mt-14 md:ml-24 sm:text-2xl sm:mt-24 sm:ml-5 mt-6 text-2xl">&lt;</button></div>
                <div className="grid grid-cols-4 gap-2 mx-8 ">
                  <div className="text-base">
                    <img src="Images\images (1).jpg" alt="" />
                  </div>
                <div>
                    <img src="Images\images (2).jpg" alt="" />
                </div>
                <div className="relative">
                    <img src="Images\images (4).jpg" alt="" />
                    <div className="absolute top-0 left-0 bg-orange-500 min-w-fit min-h-fit ">
                    <h1 className="text-white text-sm">Best Seller</h1>
                    </div>
                </div>
                <div>    
                    <img src="Images\images.jpg" alt="" />
                </div>
                </div> 
                <div><button className="lg:text-4xl lg:mr-80 lg:mt-28 md:text-2xl md:mr-40 md:mt-14 sm:text-2xl sm:mr-10 sm:mt-24 mt-6 text-2xl">&gt;</button></div>
            </div>
        <Footer/>
        </>
    );
}
export default pdp;