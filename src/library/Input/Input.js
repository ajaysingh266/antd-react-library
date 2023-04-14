


import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import './input.css'


const Input = (props) => {


  const [size, setSize] = useState()
  const [visible, setVisible] = useState(false)
  const [inputType, setInputType] = useState(props.type);

  const toggleInputType = () => {
    if (inputType === "password") {
      setInputType("text")

    }
    else if (inputType === "text") {
      setInputType("password")
    }
  }

  useEffect(() => {

    switch (props.size) {
      case "large":
        setSize("wg-input-lg")
        break;

      case "small":
        setSize("wg-input-sm")
        break;
    }
  }, [])
  const onChange = (e) => {
    if (props.onChange)
      props.onChange(e)
    setVisible(e.target.value)
  }
  return (

    <>
      <span className='wg-input-container'>
        <span >
          {props.prefix}
        </span>    
       
        <input
          className={"wg-input " + size + [props.disabled ? "wg-input-disabled " : " "]}
          onChange={onChange}
          type={inputType}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          disabled={props.disabled}
          required={props.required}
        >
          {props.children}
        </input>

        {props.type === "password "
          ? <span className='wg-input-password '
            onClick={
              () => {
                setVisible(!visible)
                toggleInputType()
              }
            }>
            {props.iconRender(visible)}
          </span>
          : <></>
        }

      </span>
    </>
  )
}

export default Input
