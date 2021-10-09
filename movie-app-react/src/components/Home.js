import React from 'react'

import Cardcontainer from './Cardcontainer';
import FavBar from './FavBar';
import Wishlist from './Wishlist';

const Home = () => {
    return (
        <div>
          <Cardcontainer/>
          <FavBar/>
          <Wishlist/>
        </div>
    )
}

export default Home
