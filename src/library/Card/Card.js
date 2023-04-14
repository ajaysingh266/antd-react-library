import React from 'react'
import './card.css'

const Card = (props) => {
    const [activeKey, setActiveKey] = React.useState(props.defaultActiveTabKey ? props.defaultActiveTabKey : [])
    let check = props.activeTabKey ? props.activeTabKey : activeKey

    const handleChange = (key) => {
        if (props.onTabChange)
            props.onTabChange(key)
        setActiveKey(key);
    }

    console.log("child", props.children);
    return (
        <>
            <div className=''>
                <div
                    className={"wg-card-container" +
                        [props.size === "small" ? "wg-card-size" : ""]
                        + [props.bordered ? " wg-card-bordered " : ""]
                        + [props.hoverable ? " wg-card-hoverable " : " "]}
                    style={props.style ? props.style : ''}>

                    {props.title}
                    {props.description}

                    <span className='wg-card-span'  >
                        {props.extra}
                    </span>

                </div>
                <div className=' wg-card-div'
                    check={check}>
                    {props.tabList.map((item, index) => {
                        console.log("item", item['tab']);
                        console.log("key", item);
                        return (
                            <div key={index} onClick={() => handleChange(item.key)} className="wg-card-div-content" >
                                {item['tab']}                            </div>
                        )
                    })}
                </div>
                <div className={'wg-card-child'}
                    style={props.style ? props.style : ''}>
                    {
                        props.children
                    }
                </div>
            </div>
        </>
    )
}

export default Card
