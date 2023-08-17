import Chat from "./Letschat";
import Navbar from "./Navbar";
import Social from "./Socialicon";
import Footer from "./Footer";
import { ImgComponent } from "./Imgg"

export default function Plp() {
    return (
        <>
            <Navbar />
            <Social />
            <Chat />

            <div className="font-extrabold lg: sm:my-5 md:text-4xl text-center underline">WOMEN</div>
            {/* <center><p style="padding-top: 2rem; font-size: 70px;border-bottom: 5.5px solid orangered;display: inline-block;line-height: 3rem;position: relative;">WOMEN</p></center> */}
            <ImgComponent />
            <Footer />


        </>
    );
};
