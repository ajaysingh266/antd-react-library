import React from 'react'

const Breadcrumb = (props) => {
  return (
    <>
      <div className='wg-breadcrumb-container'>
        
        {props.children.map((item,index)=>{
          return <>
          {index!==0 ? props.separator ? props.separator : " / " : " " }
          {item}
          </>
        })}
      </div>
    </>
  )
}

export default Breadcrumb
