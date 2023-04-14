import React from 'react'

const Progresswithstep = (props) => {
    return (
        <>
            <div className={"wg_progress flex items-center mt-4"}>
                <div className="wg_progress_outer bg-gray-300 w-40 h-4 mr-3 rounded-lg">
                    <div className={` bg-black h-full rounded-lg `} style={{ width: `${props.percent}%` }}>
                        <div className={`bg-[#1890FF] h-full rounded-lg `} style={{ width: `${props.percent}%` }}>

                        </div>
                    </div>
                </div>
                {
                    props.showInfo !== false ?
                        (<span className="wg_progress_text " title={props.percent}>
                            {props.percent}%
                        </span>) : ''
                }
            </div>
        </>
    )
}

export default Progresswithstep
