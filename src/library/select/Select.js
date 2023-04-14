

import React from 'react'
import './index.css'
import OptGroup from './Optiongroup'


// import { useState } from 'react'


const Select = (props) => {


    return (
        <>
            <select className=' border-2 border-gray-400 h-12 mt-10'>
                {
                    props.children.map((item, index) => {
                        if (item.type === 'optiongroup')
                            return <OptGroup>                                                       >
                            </OptGroup>
                        else
                            return item
                    })
                }

            </select>
        </>
    )
}
export default Select