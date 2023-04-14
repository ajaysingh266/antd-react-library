import React from 'react';
import { useEffect, useState } from 'react';

const Index = (props) => {


    const [classNam, setClassName] = useState()
    const [size, setSize] = useState('')

    useEffect(() => {
        switch (props.classNam) {
            case "success ":
                setClassName(`wg-progress-sucess`)
                break;

            case "active":
                setClassName('wg-progress-active')
                break;

            case "exception":
                setClassName(`wg_progress_exception`)
                break;

        }
        switch (props.size) {
            case "small":
                setSize(' wg-progress-sm')
                break;

            case "large":
                setSize(' wg-progress-lg')
                break;

        }
    }, [])


    return (
        <div className={"wg-progress-container "}>
            <div className="wg-progress-outer ">
                <div className={`wg-progress-inner  ${size} ${classNam}`} style={{ width: `${props.percent}%` }}>

                </div>
            </div>
            {
                props.showInfo !== false ?
                    (<span className="wg-progress-text " title={props.percent}>
                        {props.percent}%
                    </span>) : ''
            }
        </div>
    );
};

export default Index;
