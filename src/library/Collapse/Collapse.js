import React from 'react'
import "./Collapse.css"

const Collapse = (props) => {

    const [checked, setChecked] = React.useState(props.defaultCheckedKeys ? props.defaultCheckedKeys : [])
    let check = props.checkedKeys ? props.checkedKeys : checked

    const updateChecked = (e) => {


        if (props.onChange)
            props.onChange(e.target.key)
        setChecked(e)
        console.log("event ki key", e.target.key);
    }



    return (
        <div onClick={(e) => { setChecked(!checked); e.stopPropagation() }}>
            <div className='wg_collapse'
                onClick={updateChecked}
                checked={check}
            >

                {props.children}
            </div>
        </div >
    )
}

export default Collapse
