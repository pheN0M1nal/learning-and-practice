import React from 'react'

const wish = ({ title, kind }) => {
    return (
        <div className='border-2 text-xl mb-1 pl-5 text-gray-300 w-60 rounded-lg'>
            
            <span className='pt-10'>{title}  ({kind})</span>
        </div>
    )
}

export default wish
