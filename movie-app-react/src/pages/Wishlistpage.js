import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showall, addwish } from '../actions';
import { useEffect } from 'react';
import Wish from '../components/wish';
const Wishlistpage = () => {

    const wishes = useSelector(state => state.wishes)
    let lastid = wishes[wishes.length - 1].id;
    const dispatch = useDispatch();
    
    return (
        <div className='space-y-7'>
            <h1 className='pt-5 text-center text-2xl font-bold text-gray-300'>WISH LIST</h1>
                {/* <button onClick={() => dispatch(addwish({id:++lastid, title:'money', kind:'season'}))}>+</button> */}
                {wishes.map((wish) => (
                    <Wish key={++lastid} title={wish.title} kind={wish.kind}/>
                ))}
        </div>
    )
}


export default Wishlistpage;
// {tasks.map((task) => (
//     <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
// ))}