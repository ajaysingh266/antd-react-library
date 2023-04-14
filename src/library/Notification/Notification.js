import React from 'react'
import ReactDOM from 'react-dom';
import './Notification.css'
import { AiOutlineInfoCircle, AiOutlineSmile, AiOutlineClose, AiOutlineCheckCircle, AiOutlineWarning, AiOutlineCloseCircle } from 'react-icons/ai'

export const notification = {
    open: (props) => {
        let customPosition = ''
        switch (props.placement) {
            case 'Top':
                customPosition = 'wg_top'
                break;
            case 'Bottom':
                customPosition = 'wg_bottom'
                break;
            case 'Topleft':
                customPosition = 'wg_topleft'
                break;
            case 'Topright':
                customPosition = 'wg_topright'
                break;
            case 'Bottomleft':
                customPosition = 'wg_bottomleft'
                break;
            case 'Bottomright':
                customPosition = 'wg_bottomright'
                break;
        }
        const elementRef = document.createElement("div");
        elementRef.id = "notif"
        document.querySelector("body").appendChild(elementRef);
        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className={'wg_notification  ' + customPosition}>
                <div className=' wg-notifi-max' maxCount = {props.maxCount}>
                    <div className=' wg-notifi-icon'><AiOutlineSmile /></div>
                    <div className='wg_notification_header'> {props.message} </div>
                    <div className=' wg-notifi-svg' onClick={()=> notification.close()}><AiOutlineClose /></div>
                </div>
                <div className='wg_description'>{props.description}</div>
                <div className='wg_footer'>{props.btn}</div>
            </div>
        );
    },
    close: () => {
        document.getElementById("notif").remove()
    },
    success: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "notif"
        document.querySelector("body").appendChild(elementRef);

        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className={'wg_notification'}>
                <div className='wg_notification_header'>
                    <span className='wg-notifi-success'>
                        < AiOutlineCheckCircle />
                    </span>
                    <span>
                        {props.message}
                    </span>
                    <span onClick={()=> notification.close()} className='wg-notifi-svg'>
                    <AiOutlineClose />
                    </span>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        );
    },

    warning: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "notif"
        document.querySelector("body").appendChild(elementRef);

        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className={'wg_notification'}>
                <div className='wg_notification_header'>
                    <span className='wg-notifi-warning'>
                        <AiOutlineWarning />
                    </span>
                    <span>

                        {props.message}
                    </span>
                    <span onClick={()=> notification.close()} className='wg-notifi-svg'>
                    <AiOutlineClose />
                    </span>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        );
    },

    info: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "notif"
        document.querySelector("body").appendChild(elementRef);

        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className={'wg_notification'}>
                <div className='wg_notification_header'>
                    <span className='wg-notifi-info'>
                        < AiOutlineInfoCircle />
                    </span>
                    <span>


                        {props.message}
                    </span>
                    <span onClick={()=> notification.close()} className='wg-notifi-svg'>
                    <AiOutlineClose />
                    </span>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        );
    },

    error: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "notif"
        document.querySelector("body").appendChild(elementRef);

        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className={'wg_notification'}>
                <div className='wg_notification_header'>
                    <span className='wg-notifi-error'>
                    <AiOutlineCloseCircle />
                    </span>
                    <span>


                        {props.message}
                    </span>
                    <span onClick={()=> notification.close()} className='wg-notifi-svg'>
                    <AiOutlineClose />
                    </span>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        );
    }
}
// export default notification




