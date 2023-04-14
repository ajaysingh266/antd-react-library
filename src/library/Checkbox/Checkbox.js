import { useState } from "react";


const Checkbox = (props) => {

    const [checked, setChecked] = useState(props.defaultChecked)

    let flag = props.checked != null || props.checked != undefined ? props.checked : checked;

    const onChange = (e) => {
        if (props.onChange)
            props.onChange(e)
    }

    return (
        <div className="">
           
            <div className="">
                <input

                    

                    type={"checkbox"}

                    value={props.value}
                    flag={checked}
                    onChange={onChange}
                // disabled =  {props.disabled}
                />
            </div>
        </div>
    )

}
export default Checkbox