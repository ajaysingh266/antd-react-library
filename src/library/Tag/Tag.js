import React from 'react'
import { useState, useEffect } from 'react'
import './tag.css'
import { AiOutlineClose } from 'react-icons/ai'

const Tag = (props) => {
    const [popup, setPopup] = useState(props.closable ? true: false)
    const [color, setcolor] = useState()
    const closePopup = () => {
        setPopup(!popup)
    }
    const onChange = (e) => {
        if (props.onClose)
            props.onClose(e)
    }
    console.log("closable", setPopup);

    useEffect(() => {
        switch (props.color) {
            case "magenta":
                setcolor(' wg-tag-magenta')
                break;
            case "red":
                setcolor(' wg-tag-red')
                break;
            case "volcano":
                setcolor(' wg-tag-volcano')
                break;
            case "orange":
                setcolor(' wg-tag-orange')
                break;
            case "gold":
                setcolor(' wg-tag-gold')
                break;
            case "lime":
                setcolor(' wg-tag-lime')
                break;
            case "green":
                setcolor(' wg-tag-green')
                break;
            case "cyan":
                setcolor(' wg-tag-cyan')
                break;
            case "blue":
                setcolor(' wg-tag-blue')
                break;
            case "geekblue":
                setcolor(' wg-tag-geekblue')
                break;
            case "purple":
                setcolor(' wg-tag-purple')
                break;
        }
    })



    return (
        <>
            <div onClick={() => {
                                closePopup()
                                onChange()
                            }}>
                {props.visible ?
                    popup === false ?
                        " "
                        :
                        <div className={'wg_tag_container  ' + color } 
                        >
                            {props.children}
                            {props.href}
                            <span className='span-x  ' >
                                <AiOutlineClose />
                            </span>
                        </div>

                    :
                    <div className={'wg_tag_container  ' + color}
                        color={props.color}>
                        {props.children}

                        {props.href}
                    </div>

                }
            </div>
        </>
    )
}

export default Tag
