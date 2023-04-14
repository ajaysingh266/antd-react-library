import React, { useState } from 'react'

const Tabs = (props) => {
    const [active, setActive] = useState(props.defaultActiveKey ? props.defaultActiveKey : props.children.length ? props.children[0].key : "");
    const handleChange = (key) => {
        setActive(key)
    }
    const activeContent = props.children.find(item => item.key === active);
    return (
        <div>
            <div className='wg_tabs_wraper cursor-pointer '>
                {
                    props.children.map((item, index) => {
                        return <div
                            key={index}
                            onClick={() => handleChange(item.key)}
                            className={"wg_tabs_tab "
                                + [index > 0 ? " wg_tabs_ms2 " : " "]
                                + [active === item.key ? " wg_tabs_active " : " "]
                                + [item.props.disabled ? "wg_disable" : " "]
                            }>
                            {item.props.icon} {item.props.tab}
                        </div>
                    })
                }
            </div>
            <div className='wg_tabs_content'>
                {
                    activeContent
                }
            </div>
        </div>
    )
}

export default Tabs
