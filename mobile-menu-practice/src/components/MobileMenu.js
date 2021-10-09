import React from 'react'

const MobileMenu = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'bg-yellow-100 md:hidden' : 'hidden'} onClick={toggle}>
            <a className='block hover:bg-gray-300' href='#'>item1</a>
                <a className='block hover:bg-gray-300' href='#'>item1</a>
        </div>
    )
}

export default MobileMenu
