import React from 'react'
import { useState } from 'react';

const Breaditem = (props) => {

  const [checked, setChecked] = useState()


  const onChange = (e) => {
    if (props.onChange)
      props.onChange(e)
  }
  return (
    <>
      <div className='wg-breacrumbitem-main'
        onClick={(e) => { setChecked(!checked); e.stopPropagation() }}
        onChange={onChange}>


        
          {props.icon}
          <span className='span-href'>
          <a href={props.href}></a>
          {props.children}
          </span>


      

      </div>

    </>
  )
}

export default Breaditem
