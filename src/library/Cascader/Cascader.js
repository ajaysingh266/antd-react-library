import React, { useState } from 'react'

const Cascader = (props) => {
    const [children, setChildren] = useState('')

    const createComp = (selectedItem) => {
        console.log(selectedItem);
        let children = props.options.filter((item) => item.value == selectedItem ? item.children : '')
        console.log(...children);
    }

    const showChildren = (childComp) => {
        const ele = document.getElementById("kuchBhi")
        ele.insertAdjacentElement()
    }

    return (
        <>
            {/* <div className='wg_select wg_cascader wg_select_single wg_select_allow_clear wg_select_show_arrow'>
                <div className='wg_select_selector'>
                    <span className='wg_select_selector_search'>
                        <input className='wg_select_selector_search_input'
                            placeholder={props.placeholder}
                        />
                    </span>


                </div>
            </div> */}

            {
                props.options.map((item, index) => {
                    return <>
                        <div
                            onClick={
                                (e) => {
                                    createComp(item.value)
                                }
                            }
                        >
                            {item.label}
                            <span id="v">

                            </span>
                        </div>

                    </>
                })
            }

        </>
    )
}

export default Cascader
