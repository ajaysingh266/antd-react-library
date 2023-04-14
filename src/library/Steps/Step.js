
import React from 'react'
import './index.css'

const Step = (props) => {
    return (
        <>

            {/* <div className={'stepBlock' + [props.selected ? "selected" : ""]}>
                <div className='circleWrapper' onClick={props.updateStep(props.index + 1)}>
                    <div className='circle'>
                        {props.index + 1}
                    </div>
                    <span>{props.title}</span>
                </div> */}
            <div className='stepBlock'>
                <div className=' circleWrapper  flex items-center  '>
                    <span className=' mb-6'> {props.icon}</span>


                    <span className={props.dot ? '  circle square -ml-32 ' + [props.dot == 2 ? " cir" : " "]
                        + [props.dot == 3 ? "gre" : ""] : " "}>

                        {props.dot}
                    </span>

                    <div className={" grid grid-rows-2 " + [props.title === "Waiting" ? " text-gray-300" : " "]}>

                        {props.title} {props.subTitle}
                    </div>


                </div>

                <span className={' text-sm ml-8  ' + [props.title == "Finished" ? "text-gray-300" : ""]}> {props.description} </span>



            </div>
        </>
    )
}

export default Step

