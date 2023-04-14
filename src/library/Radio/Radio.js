import React from 'react'
import { useState } from 'react';


const Radio = (props) => {

    const [checked, setChecked] = useState(props.defaultChecked)

    let flag = props.checked != null || props.checked != undefined ? props.checked : checked;
    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)
    }
    return (
        <label className='m-1 inline-flex items-baseline' onClick={(e) => { setChecked(!checked); e.stopPropagation() }}>
            <span className='mr-1 top-2'>
                <input
                    type="radio"
                    value={props.value}
                    checked={flag}
                    onChange={onChange}
                    name={props.name}
                    disabled = {props.disabled}
                    size = {props.size}
                />
            </span>
            <span className='ml-1'>
                {props.children}
            </span>
        </label>






    )
}
export default Radio