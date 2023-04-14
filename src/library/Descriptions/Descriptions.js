import React from 'react'

const Descriptions = (props) => {

    return (
        <div className=' wg-descriptions-header '>
            <div className=' wg-descriptions-header-content'>
                <div className=' wg-descriptions-title'>
                    {props.title}
                    {props.size}


                </div>
                <div className=' '>  {props.extra}
                </div>
            </div>
            <table >
                <div   className={' ' +[props.bordered  ?"wg-description-border " : ""]}>
                {props.children}
                </div>
            </table>

        </div>
      
    )
}

export default Descriptions
