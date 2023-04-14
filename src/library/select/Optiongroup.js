


import React, {useState} from 'react'
import  Option from './Option'

const Optiongroup = (props) => {

    const [groupValue, setGroupValue] = useState(props.defaultValue)
    let value = props.value != undefined || props.value != null ? props.value : groupValue;
    const onChangeValue = (e) => {
        if (props.onChange)
            props.onChange(e)
        setGroupValue(e.target.value)
    }
  return (
    <>
    <optgroup  label = {props.label}>

      {
        props.children.map((item, index) => {
            if (item.type === "option")
                return <Option
                    key={index}
                    value={item.props.value}
                    checked={value == item.props.value}
                    onChange={onChangeValue}
                  
                    disabled = {item.props.disabled}
                >
                    {item.props.children}
                </Option>
            else
                return item
        })
    }
    </optgroup>
    </>
  )
}

export default Optiongroup
