import React, { useEffect, useState } from 'react'
import './mention.css'




const OptionsMenu = ({ options }) => {
    console.log(options);
    return (
        <>
            <div className='border-2 border-black'>
                {
                    options.map(item => {
                        console.log('inside menu', item);
                        return <div>{item.value}</div>
                    })
                }
            </div>
        </>
    )
}

const Mention = (props) => {
    const [options, setOptions] = useState([])
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState({})

    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)
        let text = e.target.value
        let lastElement = text[text.length - 1]
        if (lastElement === '@') {
            setShowOptions(true)
        }
    }

    useEffect(() => {
        if (props.children) {
            let temp = []
            props.children.map(item => {
                temp.push({
                    value: item.props.value,
                    key: item.props.value,
                    children: item.props.value
                })
                if (props.defaultValue && item.props.value === props.defaultValue.replace('@', '')) {
                    setSelectedOption({
                        value: item.props.value,
                        key: item.props.value,
                        children: item.props.value
                    })
                }
            })
            setOptions(temp)
        }
    }, [])


    return (
        <>
            <div className='wg-mentions' >
                <textarea
                    row="2" className='rc-textarea'
                    placeholder={props.placeholder ? props.placeholder : ''}
                    prefix={props.prefix}
                    onChange={onChange}
                    onSelect={props.onSelect}
                    style={props.style}
                    id="text-area"
yg                >
                    {props.defaultValue ? props.defaultValue : ''}
                    
                </textarea>
                {
                showOptions ? <OptionsMenu options={options} /> : ''
            }

            </div>
          
        </>
    )
}

export default Mention
