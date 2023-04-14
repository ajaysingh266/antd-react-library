import React from 'react'

const Form = (props) => {
    console.log('form',props);
    return (
        <>
            <div>
                {props.children}
            </div>


        </>
    )
}

export default Form
