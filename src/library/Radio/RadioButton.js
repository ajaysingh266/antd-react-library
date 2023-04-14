import React from 'react'
import { useState } from 'react';

const RadioButton = (props) => {

    const [checked, setChecked] = useState(props.defaultChecked)

    let flag = props.checked != null || props.checked != undefined ? props.checked : checked;
    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)
            
    }
    return (
        <label className=' flex ml-6 p-2 ' onClick={(e) => { setChecked(!checked); e.stopPropagation() }}>

            <span className='  '>
                <button className={"border  bg-blue-300 " + [props.disabled ? " bg-gray-100 p-2" : "hover:border-blue-400 p-2"]
                    + [props.size === "large" ? " w-24 h-20 " : props.size === "medium" ? " w-24 h-16 " : props.size === "small" ? " w-24 h-12" : " default"]
                }
                    type="Button"
                    value={props.value}
                    checked={flag}
                    onChange={onChange ? " bg-gray-300 " : " bg-blue-300"}
                    disabled={props.disabled}
                    name={props.name}
                    size={props.size}
                >
                    <span className={props.disabled ? "text-gray-500" : "text-black hover:text-blue-400"}>
                        {props.children}
                    </span>
                </button>
            </span>
        </label>






    )
}

export default RadioButton
