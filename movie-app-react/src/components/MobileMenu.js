import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

    
const MobileMenu = ({ isOpen }) => {

    let noOfFav = useSelector(state=>state.favroties[state.favroties.length - 1].id);

        let noOfWishes = useSelector(state=>state.wishes[state.wishes.length - 1].id);

    return (
        <div className={isOpen ? 'text-center border items-center text-xl border-gray-600 md:hidden': 'hidden'}>
            <div className='flex justify-center p-5'>
                                <Link to='./fav' className=' text-gray-300 font-bold text-grey-700'>
                                    Favroties
                                </Link>
                                <div className='rounded-full overflow-hidden'>
                                    <span className='bg-red-500 px-1 mx-2 rounded-full'>{noOfFav}</span>
                                    </div>
                                </div>
                            <div className='flex space-x-2 mb-10 justify-center'>
                                <Link to='./wish' className=' text-gray-300 font-bold text-grey-700'>
                                    Wish List
                                </Link>
                                <div className='rounded-full overflow-hidden'>
                                    <span className='bg-red-500 rounded-full px-1'>{noOfWishes}</span>
                                </div>
                                
                            </div>
        </div>
    )
}

export default MobileMenu
