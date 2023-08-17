<div className="flex py-4">
                        <div className="h-32 w-32">
                            {/* <img src="" alt=""/> */}
                        </div>
                        <div>
                            <div className="size-sm">I'm a product</div>
                            <div>$31.00</div>
                            <div className="text-sm text-slate-500">Size : Medium</div>
                        </div>
                        <QuantityControl
                                  quantity={quantity}
                                  onIncrease={handleIncrease}
                                  onDecrease={handleDecrease}
                                  />
                    <div className="ml-20 text-sm py-1">$31.00</div>
                    <div><button className="text-xs ml-10 py-2">X</button></div> 
                    </div>
                    <hr className="h-10px w-2px bg-gray-500 border-gray-500"/>
                    <div className="flex mt-10">
                        <div className="h-32 w-32">
                            {/* <img src="" alt=""/> */}
                        </div>
                        <div>
                            <div className="size-sm">I'm a product</div>
                            <div><del>$45</del>&nbsp;$31.00</div>
                            <div className="text-sm text-slate-500">Size : Medium</div>
                            <div className="text-sm text-slate-500">Colour : Blue</div>
                        </div>
                        <div>
                            {/* <!-- component --> */}
                            <div className="custom-number-input h-8 w-24">
                            <div className="flex flex-row h-8 w-full relative bg-transparent mt-1 border-2 border-black ml-10 ">
                                <button data-action="decrement" className=" bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none ">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number" className="focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                <button data-action="increment" className="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer ">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                            </div>
                        </div>  
                    <div className="ml-20 text-sm py-1">$31.00</div>
                    <div><button className="text-xs ml-10 py-2">X</button></div> 
                </div>