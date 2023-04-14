import React from 'react'

const Formitem = (props) => {
    console.log('formitem', props.rules ? props.rules[0].required : '');
    return (
        <>
            <div
                className='flex  items-center '


            >
                {props.label}

                <div className='flex  items-center ml-4 mt-2'>

                    {props.rules ?
                        props.rules.map((i) => {
                            return <>
                                {props.rules[0].required}
                            </>
                        }) 
                        : " "
                    }
                    {props.children}
                </div>
            </div>




        </>
    )
}
export default Formitem
