import React from 'react';
import Image from 'next/image'
import img from "../../public/Images/women/images (1).jpg";
import img1 from "../../public/Images/images (3).jpg";
import img2 from "../../public/Images/women/images (2).jpg";
import img3 from "../../public/Images/images (2).jpg";
import img4 from "../../public/Images/women/images (3).jpg";
import img5 from "../../public/Images/images (4).jpg";
import img6 from "../../public/Images/women/images (8).jpg";
import img7 from "../../public/Images/women/images (4).jpg";
import img8 from "../../public/Images/images (6).jpg";
import img9 from "../../public/Images/women/images (5).jpg";
import img10 from "../../public/Images/images (8).jpg";
import img11 from "../../public/Images/women/images (6).jpg"
export const Images =[
    {
        id: 1,
        image: {url : img},
        tag : "I am a prodcut",
        price : "$31",
        
    },
    {
        id: 2,
        image: {url : img1},
        tag : "I am a prodcut",
        price : "$30",
    },    
    {
        id: 3,
        image: {url : img2},
        tag : "I am a prodcut",
        price : "$31",
    },
    {
        id: 4,
        image: {url : img3},
        tag : "I am a prodcut",
        price : "$32",
    },
    {
        id: 5,
        image: {url : img4},
        tag : "I am a prodcut",
        price : "$30",
    },
    {
        id: 6,
        image: {url : img5},
        tag : "I am a prodcut",
        price : "$36",
    },
    {
        id: 7,
        image: {url : img6},
        tag : "I am a prodcut",
        price : "$42",
    },
    {
        id: 8,
        image: {url : img7},
        tag : "I am a prodcut",
        price : "$34",
    },
    {
        id: 9,
        image: {url : img8},
        tag : "I am a prodcut",
        price : "$30",
    },
    {
        id: 10,
        image: {url : img9},
        tag : "I am a prodcut",
        price : "$29",
    },
    {
        id: 11,
        image: {url : img10},
        tag : "I am a prodcut",
        price : "$32",
    },
    {
        id: 12,
        image: {url : img11},
        tag : "I am a prodcut",
        price : "$30",
    }
];

export default function Imgcomp() {
    return(
        <>
        <div className="grid lg:grid-rows-3 lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-6 grid-cols-1 ml-16 ">
        {
            Images.map((e)=>(
                <div key={e.id}>
                    <Image src={e.image.url} alt={''}/>
                    <p>{e.tag}</p>
                    <p className="text-orange-500">{e.price}</p>
                </div>
            )
            )
        }
        </div>
        </>
    );
}




