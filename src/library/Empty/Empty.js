import React from 'react'

const Empty = (props) => {
    return (
        <>
            <div className=' wg-empty-container'>
                <label className='' >
                    <img
                        
                        src={props.src}
                        width={props.width}
                        height={props.height}
                        imageStyle={props.imageStyle}
                        
                        description = {props.description}
                    />
                    
                    {props.children}
                </label>
            </div>
        </>
    )
}

export default Empty
