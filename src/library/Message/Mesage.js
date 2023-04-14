import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css"
import { RiCheckboxCircleFill, RiCloseCircleFill, RiErrorWarningFill } from "react-icons/ri"
import { CgSpinnerAlt } from "react-icons/cg"

export const Message = {
    open: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "msg"
        document.querySelector("body").appendChild(elementRef);
        const root = ReactDOM.createRoot(elementRef);
        root.render(

            <div className='wg_message  shadow-sm shadow-slate-500 flex justify-between items-center  '>
                {/* <span className=' ml-4 mb-2'>{props.message}</span> */}
                <div className='mr-1 ml-2'>
                    {props}
                </div>
            </div>



        );
    },
    close: () => {
        document.getElementById("msg").remove()
    },
    success: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "msg"
        document.querySelector("body").appendChild(elementRef);
        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className='wg_message  shadow-sm shadow-slate-500 flex  items-center  '>
                <div className=' ml-2 text-lime-600 text-xl'>
                    <RiCheckboxCircleFill />
                </div>



                <div className='mr-1 ml-2 text-slate-400'>

                    {props}
                </div>
            </div>
        );
    },
    error: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "msg"
        document.querySelector("body").appendChild(elementRef);
        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className='wg_message  shadow-sm shadow-slate-500 flex justify-between items-center  '>
                <div className=' text-red-600 text-xl'>
                    <RiCloseCircleFill />
                </div>
                <div className='mr-1 ml-2  text-slate-400'>
                    {props}
                </div>
            </div>
        );
    },
    warning: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "msg"
        document.querySelector("body").appendChild(elementRef);
        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className='wg_message  shadow-sm shadow-slate-500 flex justify-between items-center  '>
                <div className=' text-orange-500 text-xl'>
                    <RiErrorWarningFill />
                </div>
                <div className='mr-1 ml-2  text-slate-400'>
                    {props}
                </div>
            </div>
        );
    },

    loading: (props) => {
        const elementRef = document.createElement("div");
        elementRef.id = "msg"
        document.querySelector("body").appendChild(elementRef);
        const root = ReactDOM.createRoot(elementRef);
        root.render(
            <div className='wg_message  shadow-sm shadow-slate-500 flex justify-evenly items-center  '>
                <div className=' wg-spin-dot-spin text-blue-500 text-xl'>
                    <CgSpinnerAlt />
                </div>
                <div className='mr-1 ml-2  text-slate-600 '>
                    {props}
                </div>
            </div>
        );
    },
}
export default Message