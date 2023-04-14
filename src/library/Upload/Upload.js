import React from 'react'
import './upload.css'
import WeboButton from "../Button/Button"

const Upload = (props) => {
    console.log(props.children);
    return (
        <>
            <div className='wg-upload .ant-upload-select '>
                <span className='wg-upload ' role="button" >
                    <input
                        type="file"
                        accept="file_extension|audio/*
                        |video/*|image/*|media_type"
                        name={props.name}
                        // onChange={handleChange}
                        style={{ display: "none" }}
                        onChange={props.onChange}
                    />
                    {
                        (props.children.type.name == "Button") &&
                        <WeboButton onClick={props.onChange}>{props.children.props.children}</WeboButton>
                    }
                </span>
                <div className='wg-upload-list'>

                </div>
            </div>
        </>
    )
}

export default Upload

