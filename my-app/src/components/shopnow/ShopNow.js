import React from 'react'
import shopImg from '../assets/shop.webp'
import ShopItem from './ShopItem'

function ShopNow() {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <img src={shopImg} alt="" />
            </div>
            <h1>New Arrivals</h1>
            <div> <ShopItem /> </div>
            <dir>
                <button class="py-2 px-4 bg-black text-white hover:bg-white hover:text-black hover:transition transform hover:translate-x-2 rounded">
                    View all Products
                </button>

            </dir>
        </div>
    )
}

export default ShopNow