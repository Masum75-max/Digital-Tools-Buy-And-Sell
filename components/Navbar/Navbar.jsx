import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import shopping from "../../src/assets/products/shopping-cart.png"
const Navbar = ({selected}) => {
    return (
        <div className='flex justify-between items-center px-10 py-7 shadow-2xl'>
            <h1 className='text-3xl text-fuchsia-800 font-bold'>Digitools</h1>
            <ul className='flex gap-5 hidden lg:inline-block'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>

            </ul>

            <div className='flex gap-3 items-center' >
            <div className='flex relative mr-3'>
                <img src={shopping}/>  <p className='absolute -top-4 left-2 bg-red-500 px-2 rounded-full text-sm font-bold text-white'>{selected.length}</p>
            </div>
              <p>login</p>
              <button className='bg-fuchsia-900 px-2 py-2 rounded-lg text-white font-bold
              '>Get started</button>
            </div>
        </div>
    );
};

export default Navbar;