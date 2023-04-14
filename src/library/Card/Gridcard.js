import React from 'react'
import './card.css'
import Card from './Card'

const Gridcard = (props) => {
    console.log(props.style.gridStyle);
   
    return (
        <>
        <div className='wg-gridcard'
         style={props.style ? props.style : ''}>
            
        </div>
        <div>{props.children}</div>
        </>
        

    )
}

export default Gridcard
