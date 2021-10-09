import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';


const Component1 = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();


    return (
        <div>
            hope {counter}
            <button onClick={() => dispatch(increment('tailwind'))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Component1;