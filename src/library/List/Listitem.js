import React from 'react'

const Listitem = (props) => {
    return (
        <>
            <div className='wg-listitem-container'>
                <div >
                    <p className='wg-listitem-container'>
                        {props.children}
                    </p>

                </div>
                <span className='wg-listitem-action'>
                    {props.actions}

                </span>
                {props.extra}
            </div>
        </>
    )
}

export default Listitem
