import React, { useState } from 'react'
import { FaGreaterThan } from "react-icons/fa"
import "./Collapse.css"


const Panel = (props) => {

    const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed ? false : true);

    const [rotateIcon, setRotateIcon] = useState(false)
    const handleRotate = () => {
        setRotateIcon(!rotateIcon)
    }




    return (
        <div>
            <div className='wg_panel ' onClick={() => {
                setIsCollapsed(!isCollapsed)
                handleRotate()
            }}>
                <FaGreaterThan className={'rotate-icon ' + [rotateIcon ? "rotate " : "null "]} />
                {props.header}

            </div>
            <div className={'' + [isCollapsed ? "collapse" : "nocollapsed"]}



            >
                {props.children}
            </div>
        </div>
    )
}

export default Panel

