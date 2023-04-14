
import React from "react";
import "./Switch.css";
const Switch = (props) => {

    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)
    }
    // let switchclass = [props.isOn ? "wg-switch-checked" : "wg-switch-unchecked", props.disabled ? "wg-switch-disabled " : ''].join(" ")

    return (
        <>
            <button class={"wg-switch "
                + [props.isOn ? "wg-switch-checked " : "wg-switch-unchecked "]
                + [props.disabled ? "wg-switch-disabled " : ' ']
            }
                onClick={onChange}
                disabled={props.disabled}
            >
                
                <div class="wg-switch-handle">

                </div>

                <span class="wg-switch-inner" >{props.isOn ? props.checkedChildren : props.unCheckedChildren}
                </span>
            </button>

        </>
    );
};

export default Switch;
