import React from 'react'
import MainCarousel from './MainCarousel';
import ItemCarousal from './ItemCarousal';
import Footer from './Footer';
import ItemOnMenu from './ItemOnMenu';

const Home = (listIsOpen) => {
    console.log(listIsOpen);
    return (
        <div>
                <MainCarousel listIsOpen={listIsOpen}/>
                <ItemOnMenu num={1}/>
                <ItemCarousal/>
                <ItemOnMenu num={2}/>
                <ItemCarousal/>
                <ItemOnMenu num={3}/>
                <ItemCarousal/>
                <Footer/>
        </div>
    )
}

export default Home
