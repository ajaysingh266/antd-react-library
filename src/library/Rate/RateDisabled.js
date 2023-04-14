import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Rate.css'
import Tooltip from '../Tooltip/Tooltip';

const RateDisabled = (props) => {


    const [disabled, setDisabled] = useState(true)
    console.log(props);
    const stars = Array.from({ length: props.count }, () => <FaStar />)
    return (
        <div className='wg-container'>
            <div className='wb-star'>
                {stars.map((item, index) => {
                    let style = props.inactiveColor;
                    if (index == props.defaultvalue) {
                        style = props.activeColor;
                    }

                    return (
                        <Tooltip title={props.Tooltips ? props.Tooltips[index] : 'hi'} >
                            <FaStar className={props.disabled ? "wg-rate-disabled " : "wg-rate "}
                                key={index}
                                style={{ color: style }}
                                onClick={() => setDisabled(!disabled)}
                                disabled={props.disabled}

                            />
                        </Tooltip>
                    )
                })}
            </div>
        </div>
    )
}

export default RateDisabled
