import React from 'react'
import NavHead from './NavHead'
import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsBagDash } from "react-icons/bs";

function Navbar() {
    const data = ["NEW", "HEELS", "SNEAKERS", "FLATS", "SANDALS", "BOOTS", "WEDGES", "BAGS", "KIDS", "MEN", "SALE", "REWARDS"];

    return (
        <div>
            <div> <NavHead /> </div>
            <nav className='px-2 sticky top-0 '>
                <div className='flex items-center justify-between'>
                    <div></div>
                    <div className='text-center flex flex-col divide-y-2 divide-slate-600'>
                        <h1 className='text-xl font-bold '>TRUFFLE </h1>
                        <h2>Collection</h2>
                    </div>
                    <div className='flex space-x-2 text-3xl font-bold'> <AiOutlineHeart /> <AiOutlineUser /> <AiOutlineSearch /> <BsBagDash />  </div>
                </div>
                <div className='flex justify-center'>
                    <ol className='flex w-2/3 justify-between font1'>
                        {data.map((item, index) => (
                            <li className='hover:text-gray-400' key={index}>  {item}</li>
                        ))}
                    </ol>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
