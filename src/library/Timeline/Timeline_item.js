import React from 'react'


const Timeline_item = (props) => {
    let customColor = ''
    switch (props.color) {
        case 'green':
            customColor = 'wg-timeline-item-head-green'
            break;
        case 'red':
            customColor = 'wg-timeline-item-head-red'
            break;
        case 'gray':
            customColor = 'wg-timeline-item-head-gray'
            break;
        default:
            customColor = 'wg-timeline-item-head-blue'
            break;
    }
    return (
        <div className='wg-timeline-container' >

            <div className='wg-timeline-item'>
                <div className='wg-timeline-item-tail'></div>
                <div className={props.dot ? customColor : 'wg-timeline-item-head ' + customColor} >{props.dot}</div>
                <div className='wg-timeline-item-content' >
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Timeline_item
