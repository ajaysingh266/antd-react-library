
import React from 'react'

import './index.css'

const Steps = (props) => {
    return (
        <>
            <div className=' flex justify-evenly items-center'>
                {props.children}
                {props.size}
                {/* {props.current}
                {props.percent} */}
                {/* {props.titleArray.map((item, index) => <Step key={index} index={index} title={item} selected={props.currentStep === index + 1} updateStep={props.updateStep}></Step>)} */}

            </div>

        </>
    )
}

export default Steps