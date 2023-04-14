import React, { useState } from 'react'

const Menu_Item = ({ item, selectedKey, setKey,onChange }) => {

    const handleClick = (e) => {
        e.key = item.key
        console.log("item selected",e.key);
        // onChange(e)
    }
    return (
        <div
            className={'flex flex-row gap-3 items-center hover:text-blue-400 cursor-pointer '
                + [item.disabled ? " cursor-not-allowed hover:text-gray-300 text-gray-300 " : ' ']
               
            }
            key={item.key}
            onClick={handleClick}
        >

            <span>{item.icon}</span>
            <span >{item.label}</span>


        </div >
    )
}

export default Menu_Item
