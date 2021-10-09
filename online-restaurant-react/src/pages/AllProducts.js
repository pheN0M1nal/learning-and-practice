import { useState } from "react";
import { SliderData } from "../components/SliderData"
import {useSelector, useDispatch } from 'react-redux';

import { addtocart } from '../actions';
const AllProducts = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    let lastid = orders[orders.length - 1].id;
    const onClick = (slideName, slidePrice) =>{
        console.log(slideName)
        dispatch(addtocart({id:++lastid, name:slideName, price:slidePrice}))
    }
    const items = SliderData;

    const [text, setText] = useState('')

    function func(par){
        return par.name.toLowerCase().includes(text.toLowerCase());
    }

    let filtered = items.filter(func);

    
    return (
        <div className='allProductPage'>
            <h1>All Products </h1>
            <input className='search' type='search' placeholder='Search product' value={text} onChange={(e)=>setText(e.target.value)}></input>

            <div className='itemgrid'>
            
                {filtered.map((item, index)=>(
                        <div key={index} className='btndiv'> 
                        <img src={item.image} className='image' alt="Snow" style={{width:"100%"}}/>                           
                            <div className='dataofitem'>
                                <span>{item.name}</span>
                                <span>Price: <span style={{color: 'red'}}>{item.price}$</span></span>
                            </div>
                            <button className="btnn" onClick={()=>onClick(item.name, item.price)}>Order Now</button>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default AllProducts
