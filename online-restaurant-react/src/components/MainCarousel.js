import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SliderData } from './SliderData';
const MainCarousel = (listIsOpen) => {
    const slides = SliderData
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    return (
        <section className='mainslider'>
            <div style={{visibility:'hidden'}}>
                    {setTimeout(function(){setCurrent(current === length - 1 ? 0 : current + 1)},8000)}
            </div>
        {slides.map((slide, index) => {
            return (
            <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (
                <div className="maincontainer">
                <img src={slide.image} className='mainimages' alt="Snow" style={{width:"100%"}}/>
                    <div className='text-con'>
                        <h1>Even the most finicky eater will find something appetizing here.</h1>
                        <h4>Our Goal is to provide Best! On The GO</h4>
                        <Link to='./all-products' >
                        <button className="btn" >Order Now</button>
                            </Link>
                        

                    </div>
                </div>
                )}
            </div>
            );
        })}
        </section>
    )
}
export default MainCarousel





