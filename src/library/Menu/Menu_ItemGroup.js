import React from 'react'
import Menu_Item from './Menu_Item'

const Menu_ItemGroup = ({ item,selectedKey,onClick}) => {
    return (
        <>
            <div className='anticon'>
                <span className=''>{item.label}</span>
                <div className='flex flex-col gap-1'>
                    {item.children.map((elem, i) => {
                        
                        return <>
                            <span className='py-2'>
                                <Menu_Item item={elem}  selectedKey={selectedKey}  onClick={onClick}/>
                            </span>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default Menu_ItemGroup
