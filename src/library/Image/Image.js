import React from 'react'
import './image.css'

const Image = (props  ) => {
    

   
    



return (
    <>
        <div className='wg_image_container' >
            <label for="zoomCheck">
                <img className='wg_image-main'
                    src={props.src ? props.src : props.fallback}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                />
            </label>
        </div>
    </>
)
}

export default Image
