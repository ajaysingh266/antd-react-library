import React from 'react'
import Webobutton from '../Button/Button'
import { AiOutlineWarning } from 'react-icons/ai'

const Popconfirm = (props) => {

    


    return (
        <>
            {props.visible ?
                <div className='wg-popconfirm-container  '>
                    <div className='wg-popconfirm-inner '>
                        <span className='wg-popconfirm-span'>
                            <AiOutlineWarning />
                        </span>
                        <span className='wg-popconfirm-title'>
                            {props.title}
                        </span>
                    </div>
                    <div className='wg-popconfirm-confirm'>

                        <Webobutton type="primary" onClick={props.onConfirm}>
                            {props.okText ? props.okText : "Confirm" }
                        </Webobutton>
                        
                        <Webobutton onClick={props.onCancel}>
                            {props.cancelText? props.cancelText : "Cancel"}
                        </Webobutton>

                    </div>
                </div>

                : " "

            }
            {props.children}


        </>
    )
}

export default Popconfirm
