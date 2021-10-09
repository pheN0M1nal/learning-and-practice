import { useSelector, useDispatch } from 'react-redux';
import {addwish } from '../actions';
import { useState } from 'react';
import Button from './Button'
import { useEffect } from 'react';

const Wishlist = () => {

    const [title, setTitle] = useState('')
    const [kind, setKind] = useState('')
    const dispatch = useDispatch();

    
    
    const wishes = useSelector(state => state.wishes);
    let lastid = wishes[wishes.length - 1].id;

    const onSubmit = (e) => {

        e.preventDefault();

        if(!title){
            alert('Please add a title');
            return;
        }
        if(!kind){
            alert('Please mention its a movie or season');
            return;
        }
        
      

        dispatch(addwish({id: ++lastid, title:title, kind:kind}));

        if(title && kind)
            alert('Wish added Successfully.')

        setTitle('')
        setKind('')
    }



    return (
        <div className='sm:block space-y-5 md:flex pt-10 justify-between'>
            <span className="text-2xl px-28 pt-20 font-bold text-white">Add to WISH LIST</span>



            <div class=" border-gray-600 border-2 flex items-center w-full max-w-xs">
                <form onSubmit={onSubmit} class=" shadow-md rounded px-8 pt-6 pb-2 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-200 text-sm font-bold mb-2" for="username">
                            Title
                        </label>
                        <input value ={title} onChange={(e) => setTitle(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-200 text-sm font-bold mb-2" for="username">
                            Mention its kind
                        </label>
                        <input value ={kind} onChange={(e) => setKind(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className='pt-5 ml-10'>
                        <input className=" bg-gray-500 rounded text-gray-50 p-2" type='submit' value='Add to WishList' />
                    </div>
                        
                </form>
                
            </div>

        </div>

    )
}

export default Wishlist
