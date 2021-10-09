import React from 'react'

const Button = ({ text, color, onClick}) => {
    return (
        <div className="px-10 p-2">
           <button style={{ backgroundColor: color }} className=" rounded text-gray-50 p-2" onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
