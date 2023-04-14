import React from 'react'

const RadiobuttonGroup = () => {
  
    const [groupValue, setGroupValue] = useState(props.defaultValue)

    let value = props.value != undefined || props.value != null ? props.value : groupValue;
    const onChangeValue = (e) => {
        if (props.onChange)
            props.onChange(e)
        setGroupValue(e.target.value)
        
    }
    return (
        <div>
            <div className=''>
                {
                    props.children.map((item, index) => {
                        if (item.type.name === "Button")
                            return <RadioButton
                                key={index}
                                value={item.props.value}
                                checked={value == item.props.value}
                                onChange={onChangeValue}
                                disabled = {item.props.disabled}
                                name = {item.props.name}
                                size = {item.props.size}
                            >
                                {item.props.children}
                            </RadioButton>
                        else
                            return item
                    })
                }
            </div>
            
        </div>
  )
}

export default RadiobuttonGroup
