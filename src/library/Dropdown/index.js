import React from 'react'


import Dropdown from './Dropdown'
import Menu from '../Menu/Menu'
import {BsEmojiSmile} from 'react-icons/bs'
import {AiOutlineDown} from 'react-icons/ai'





const Index = () => {
    

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item (disabled)
                    </a>
                ),
                icon: <BsEmojiSmile />,
                disabled: true,
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item (disabled)
                    </a>
                ),
                disabled: true,
            },
            {
                key: '4',
                danger: true,
                label: 'a danger item',
            },
        ]}
    />
);
    return (
        <>
            <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                    <div className='flex items-center'>
                        Hover me
                        <AiOutlineDown />
                    </div>
                </a>
            </Dropdown>
            
        </>
    )

}

export default Index
