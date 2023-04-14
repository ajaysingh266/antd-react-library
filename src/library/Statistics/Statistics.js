import React from 'react'
import './statistics.css'

const Statistics = (props) => {
    return (
        <>
        <div className='wg-statistic-container'>
            <div className=' wg-statistic'>
                <div className='wg-statistic-prefix '>
                    {props.prefix}
                   <span className='wg-statistic-title'>{props.title} </span> 
                </div>
                <div className='wg-statistic-content'>
                   <span className='wg-statistic-content-value'> {Math.ceil(props.value)} </span>
                   <span>{props.suffix}</span>
                    <span>{props.precision ? ".00" : " "} </span>
                </div>

            </div>
            </div>

        </>
    )
}

<div>

</div>
export default Statistics
