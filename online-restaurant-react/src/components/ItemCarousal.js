import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../actions';
import { SliderData } from './SliderData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

const ItemCarousal = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    let lastid = orders[orders.length - 1].id;
    const onClick = (slideName, slidePrice) =>{
        console.log(slideName)
        dispatch(addtocart({id:++lastid, name:slideName, price:slidePrice}))
    }
    return (
            <div className='itemsmenu'>
                <Splide   options={ { rewind : true, perPage: 5, width :1800,gap:'1rem',} }>
                    {SliderData.map((slide, index) => {
                        return (
                       
                            <SplideSlide key={index}>

                                <img src={slide.image} className='image' alt="Snow" style={{width:"100%"}}/>
                                <button className="btn" onClick={()=>onClick(slide.name, slide.price)}>Order Now</button>
                                <span className='itemName'>{slide.name}</span>

                            </SplideSlide>
                         
                        );
                    })}
                 </Splide>
            </div>
 )
}
export default ItemCarousal
