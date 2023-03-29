import React from 'react'

const ColorCard = ({ color, onClick, flash }) => {

    return (
        <div
            onClick={onClick}
            className={`cursor-pointer w-[100px] md:w-[200px] h-[100px] md:h-[200px] ${color} ${flash && 'opacity-80 rounded-md border-4 border-white'}`}
        ></div>
    )
}

export default ColorCard