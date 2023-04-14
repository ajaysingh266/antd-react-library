import React, { useState } from 'react'
import './Rate.css'
import { FaStar } from 'react-icons/fa'

import Tooltip from '../Tooltip/Tooltip';


const Rate = (props) => {

    console.log(props);
    const stars = Array.from({ length: props.count }, () => <FaStar />)

    const handleChange = (value) => {
        props.onChange(value + 1);
    }

    return (
        <div className='wg-container'>
            <div className='wg-star'>
                {stars.map((item, index) => {
                    let style = props.inactiveColor;
                    if (index < props.value) {
                        style = props.activeColor;
                    }

                    return (
                        <Tooltip title={props.Tooltips ? props.Tooltips[index] :  'hi'} >
                            <FaStar className={props.disabled ? "wg-rate-disabled " : "wg-rate "}
                                key={index}
                                style={{ color: style }}
                                onMouseEnter={() => handleChange(index)}                             

                            />
                        </Tooltip>
                    )
                })}

            </div>
        </div>

    )
}


export default Rate;



