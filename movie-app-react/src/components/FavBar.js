import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const FavBar = () => {
    const onClick = () => {
        <Link to='/fav'/>
    }

    return (
        <div className="border-2 border-gray-600 flex justify-between items-center ">
            <span className="px-5 text-xl md:px-28 md:text-2xl font-bold text-white">Your Favorite Content</span>
            <div className='py-6 pr-28'>
                <Link to='./fav' className=" rounded px-3: p-2 bg-gray-500 text-gray-100">
                    Favroties
                </Link>
            </div>
            
        </div>
    )
}

export default FavBar
