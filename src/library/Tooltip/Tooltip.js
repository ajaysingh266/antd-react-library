import React, { useState } from "react";
import './Tooltip.css'

const Tooltip = (props) => {
    
    const [active, setActive] = useState(false);

    const showTip = () => {
        setActive(true);
    };

    const hideTip = () => {

        setActive(false);
    };

    return (
        <span className="wg-Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}  >
            {props.children}
            {active && (
                <span className={`wg-Tooltip-Tip ${props.placement || "wg-top"}`}>

                    {props.title}
                </span>
            )}
        </span>
    );
};

export default Tooltip;
