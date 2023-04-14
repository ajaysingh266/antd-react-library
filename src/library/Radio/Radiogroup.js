import React from 'react'
import './Radio.css'
import Radio from './Radio'


import { useState } from 'react'


const Index = (props) => {
    
    const [groupValue, setGroupValue] = useState(props.defaultValue)
    let value = props.value != undefined || props.value != null ? props.value : groupValue;
    const onChangeValue = (e) => {
        if (props.onChange)
            props.onChange(e)
        setGroupValue(e.target.value)
        //  console.log('radio',e.target.name);
        //  console.log('radio',e.target.value);
    }
    return (
        <div>
            <div className='inline-flex'>
                {
                    props.children.map((item, index) => {
                        if (item.type.name === "Radio")
                            return <Radio
                                key={index}
                                value={item.props.value}
                                checked={value == item.props.value}
                                onChange={onChangeValue}
                                name =  {item.props.name}
                                disabled = {item.props.disabled}
                                size = {item.props.size}
                            >
                                {item.props.children}
                            </Radio>
                        else
                            return item
                    })
                }
            </div>
        </div>
    )
}
export default Index












