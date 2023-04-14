
import React from 'react';
import { useState, useEffect } from 'react';
import './Alert.css';


const Alert = (props) => {
    // let show = " ";

    const [type, setType] = useState()
    const [popup, setPopup] = useState(props.closable ? true : false)
    const [icon, setIcon] = useState()




    useEffect(() => {
        switch (props.type) {
            case "success":
                setType(' wg_ty_success')
                break;

            case "info":
                setType(' wg_ty_info')
                break;

            case "warning":
                setType(' wg_ty_warn')
                break;

            case "error":
                setType(' wg_ty_error')
                break;
        }
        switch (props.type) {

            case "success":
                setIcon(<i class="fa-solid fa-circle-check"></i>)
                break;

            case "error":
                setIcon(<i class="fa-solid fa-circle-xmark"></i>)
                break;

            case "warning":
                setIcon(<i class="fa-solid fa-circle-exclamation"></i>)
                break;

            case "info":
                setIcon(<i class="fa-solid fa-circle-info"></i>)
                break;
        }

    }, [])
    console.log(props);

    return (
        <>
            {props.closable ?
                popup === false ?
                    " "
                    : <div className='wg-alert'>
                    <div className={type} >
                        <div className='wg-alert-container'>
                            {props.showIcon ? icon : " "}
                            <div className=' wg-alert-div'>
                                <span className='wg-alert-message' >{props.message}</span>
                                <span >{props.action}</span>
                                <span className='span-x  ' onClick={() => {
                                    setPopup(false)
                                }}>x</span></div>
                        </div>
                        <p>{props.description}</p>
                    </div>
                    </div>

                :
                <div className='wg-alert'>
                <div className={type} >
                    <div className='wg-alert-container'>
                        {props.showIcon ? icon : " "}
                        <span className='wg-alert-message'> {props.message}</span>
                        <span className='wg-alert-action'>{props.action}</span>
                    </div>
                    <p>{props.description}</p>

                </div>
                </div>
            }
        </>
    )
}

export default Alert;
