import Free from "./Freeshipping";
import Pics from "./Homepics";
import Chat from "./Letschat";
import Navbar from "./Navbar";
import Social from "./Socialicon";
import Footer from "./Footer";
import Imgcomponent from "./Images";

const Homepage = () =>{
    return(
        <>
        <Navbar/>
        <Social/>
        <Chat/>
        <Free/>
        <Pics/>
        <div className="font-bold lg: sm:my-5 md:text-4xl text-center underline">New Arrival</div>
        <Imgcomponent/>
        <div className="text-center my-16">
            <button className="border-2 px-11 font-bold border-spacing-1 text-orange-500 border-orange-500 hover:bg-orange-200 hover:text-black">Shop All</button>
            <button className="border-2 px-3 font-extrabold text-1xl bg-orange-500 border-spacing-1 text-white border-rose-100 hover:bg-orange-300 hover:text-black">></button>
        </div> 
        <Footer/>


        </>
    );
};
export default Homepage;