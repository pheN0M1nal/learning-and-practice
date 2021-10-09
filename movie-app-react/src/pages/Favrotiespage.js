import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Cardcontainer from '../components/Cardcontainer';
import Card from '../components/Card';
import { addtofav } from '../actions';
import { useEffect } from 'react';


const Favrotiespage = () => {

    const favroties = useSelector(state => state.favroties)
    const dispatch = useDispatch();

    return (
        <div>
            <div className=' max-h-full'>
            <div className='text-gray-300 text-center font-bold text-2xl'>
                <h1 className='pt-5'>Favroties!</h1>
                <div className='flex w-4/5'>
                    
                {
                    favroties.map((movie) => (
                        <Card img={movie.img} title={movie.title} description={movie.description} link={movie.link}/>
                    ))
                }
                </div>

            </div>
        </div>
        </div>
    )
}

export default Favrotiespage
