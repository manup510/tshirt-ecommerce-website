import Product from "./ImageMap.js";
// import img from "../../public/Images/women/images (1).jpg";
import img1 from "../../public/Images/images (3).jpg";
import img2 from "../../public/Images/women/images (2).jpg";
import img3 from "../../public/Images/images (2).jpg";
import img4 from "../../public/Images/women/images (3).jpg";
import img5 from "../../public/Images/images (4).jpg";
import img6 from "../../public/Images/women/images (8).jpg";
import img7 from "../../public/Images/women/images (4).jpg";
import img8 from "../../public/Images/images (6).jpg";
import img9 from "../../public/Images/women/images (5).jpg";
// import img10 from "../../public/Images/images (8).jpg";
// import img11 from "../../public/Images/women/images (6).jpg"
import React, { useState } from "react";


const ProductContext = React.createContext(null);

const ProductProvider = ({children})=>{
    // console.log(img1b,'img1bimg1b');
    const [productData , setProductData] = useState({})
    // const [compareList, setCompareList] = useState([]);
    // const [quantity, setQuantity] = useState(1)

      // Function to add a product to the comparison list
  const addProductToCompare = (product) => {
    setProductData((prevData) => ({ ...prevData, [product.id]: product }));
  };

  // Function to remove a product from the comparison list
  const removeProductFromCompare = (productId) => {
    setProductData((prevData) => {
      const newData = { ...prevData };
      delete newData[productId];
      return newData;
    });
  };

    const products = [
        {
          id: 1,
          image: { url: img1 },
          name: "Product 1",
          price: 40.00,
          Sale: "True",
          quantity: 1,
          Brand: "A",
          // altimg:  {url: img1b},
          // altimg1: {url: img1b}
          // altimg2: {url: img1a},
          // altimg3: {url: img1a}
        },
        {
          id: 2,
          image: { url: img2 },
          name: "Product 2",
          price: 25.00,
          Sale: "False",
          quantity: 1,
          Brand: "D",
          altimg: {url: img1},
          altimg1: {url: img1},
          altimg2: {url: img1},
          altimg3: {url: img1}
        },
        {
          id: 3,
          image: { url: img3 },
          name: "Product 3",
          price: 79.00,
          Sale: "False",
          quantity: 1,
          Brand: "A",
          altimg: {url: img1},
          altimg1: {url: img1},
          altimg2: {url: img1},
          altimg3: {url: img1}
        },
        {
          id: 4,
          image: { url: img4 },
          name: "Product 4",
          price: 100.00,
          Sale: "False",
          quantity: 1,
          Brand: "B",
          // altimg: {url: img4a},
          // altimg1: {url: img4b},
          // altimg2: {url: mg4c},
          // altimg3: {url: img4d}
        },
        {
          id: 5,
          image: { url: img5 },
          name: "Product 5",
          price: 25.00,
          Sale: "True",
          quantity: 1,
          Brand: "A",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
        {
          id: 6,
          image: { url: img6 },
          name: "Product 6",
          price: 189.00,
          Sale: "True",
          quantity: 1,
          Brand: "C",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
        {
          id: 7,
          image: { url: img7 },
          name:"Product 7",
          price: 43.00,
          Sale: "False",
          quantity: 1,
          Brand: "C",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
        {
          id: 8,
          image: { url: img8 },
          name: "Product 8",
          price: 99.00,
          Sale: "False",
          quantity: 1,
          Brand: "A",
          // altimg: {url: img8a},
          // altimg1: {url: img8b},
          // altimg2: {url: img8c},
          // altimg3: {url: img8d}
        },
        {
          id: 9,
          image: { url: img9 },
          name: "Product 9",
          price: 299.00,
          Sale: "True",
          quantity: 1,
          Brand: "B",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
      ];

    return (<ProductContext.Provider value={{products, productData, setProductData}}>
        {children}
    </ProductContext.Provider>)
};

export {ProductProvider, ProductContext};