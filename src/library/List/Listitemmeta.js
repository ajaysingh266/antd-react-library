import React from 'react'

const Listitemmeta = (props) => {
  return (
    <>
      <div className='wg-listmeta-container'>
        <div className='wg-listmeta-main'>
          {props.avatar}
          <span className='wg-listmeta-title'>
            {props.title}
          </span>
        </div>
        <span className='wg-listmeta-description'>
          {props.description}
        </span>

      </div>
    </>
  )
}

export default Listitemmeta
