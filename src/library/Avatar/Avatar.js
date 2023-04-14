import React, { useEffect, useState } from 'react'

const Avatar = (props) => {

    const [icon, setIcon] = useState()
    const [isShape, setIsShape] = useState()
    useEffect(() => {
        switch (props.size) {
            case "large":
                setIcon("wg_large")
                break;
            case "medium":
                setIcon("wg_medium")
                break;
            case "small":
                setIcon("wg_small")
                break;
            case "default":
                setIcon("wg_default")
                break;
        }
        switch (props.shape) {
            case "square":
                setIsShape("wg_square")
                break;
            case "circle":
                setIsShape("wg_circle")
                break;

        }
    }, [])



    return (
        < >
            <div className={isShape}>
                <div className={icon}  >
                    {props.icon}
                </div>
            </div>


        </>
    )
}

export default Avatar
