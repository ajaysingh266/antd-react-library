import React from 'react'
import { useState } from 'react';

const Option = (props) => {
    const [isActive, setIsActive] = useState(props.defaultValue)
    let flag = props.isActive != null || props.isActive != undefined ? props.isActive : isActive;
    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)
            
    }
    return (
        <  >
        
                <option 

                    value={props.value}
                    isActive={flag}
                    onChange={onChange}

                    disabled={props.disabled}
                >
                    
                        {props.children}
                    
                </option>
                
           
        </>
    )
}

export default Option