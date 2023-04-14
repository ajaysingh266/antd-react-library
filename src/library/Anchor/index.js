import React from 'react'
import Link from "./Link"
import "./index.css";

const index = (props) => {
    props.children.map(item => console.log(item))

    return (
        <>
            <div className="nav">
                {props.children.map((item, index) => {
                    return (
                        <div key={index} className={"wg-anchor-link"}>
                            <Link href={item.props.href} title={item.props.title} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default index
