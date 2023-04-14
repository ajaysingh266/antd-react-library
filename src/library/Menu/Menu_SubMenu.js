import React from 'react'
import Menu_ItemGroup from './Menu_ItemGroup';
import Menu_Item from './Menu_Item'

const Menu_SubMenu = ({ item,selectedKey,onClick }) => {
    return (
        <>
            <div className='wg_dropdown cursor-pointer  anticon  '>
                <span className=' hover:text-blue-500 '>{item.icon} {item.label}</span>
                <div className='wg_dropdown_content flex flex-col gap-1'>

                    {item.children.map((elem, i) => {
                        if (elem.type === 'group') {
                            return <div >
                                <span className=''>
                                    <Menu_ItemGroup item={elem} selectedKey={selectedKey} onClick={onClick}/>
                                </span>
                            </div>
                        }
                        else {
                            return <Menu_Item item={elem} />
                        }

                    })}
                </div>
            </div>
        </>
    )
}

export default Menu_SubMenu
