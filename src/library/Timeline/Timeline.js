import React from 'react'
import { ImSpinner2 } from 'react-icons/im'


const Timeline = (props) => {
    let children = [...props.children, 
    <>
        <span className=' anticon-spin'><ImSpinner2 /></span>
        <span className='wg-timeline-item-content ' > {props.pending}</span>
    </>]
    return (
        <>
            
                <div className='wg-timeline-item'>
                    {props.reverse ? children.reverse() : children}
                </div>
           

        </>
    )
}

export default Timeline
