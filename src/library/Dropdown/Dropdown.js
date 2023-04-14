import React from 'react'
import ReactDOM from "react-dom";
import './index.css'



const Dropdown = (props) => {

    console.log(props);
    return ReactDOM.createPortal(
        <>

            <div className='wg_dropdown cursor-pointer'>

                <div className='wg_dropdown_content'>{props.overlay}</div>

                {props.children}
            </div>
        </>
        , document.getElementsByTagName("body")[0]
    )
}

export default Dropdown
