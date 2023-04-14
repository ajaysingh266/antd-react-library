import React from 'react'
import { useState } from 'react';


const Dots = () => {
    const [hover, setHover] = useState(false)


    return (
        hover
            ? <span
                className="wg-pagination-dot"
                onMouseOut={() => { setHover(false) }}
                onClick={() => {

                }}
            >
                &gt;&gt;&gt;
            </span>

            : <span
                onMouseOver={() => { setHover(true) }}
                className="wg-pagination-dot ">
                •••
            </span>
    )
}

const Pagination = (props) => {

    const [post, setPost] = useState([]);
    const [number, setNumber] = useState(1); // No of pages
    const [showDots, setShowDots] = useState(false)
    const [currentPage, setCurrentPage] = useState(props.defaultCurrent ? props.defaultCurrent : 1)

    const postPerPage = 10;
    const lastPost = number * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = post.slice(firstPost, lastPost);
    const pageNumber = [];
    let min = 0

    //     console.log("fp", firstPost);
    //     console.log("lp", lastPost);
    //     console.log("current", currentPost);


    for (let i = 1; i <= Math.ceil(props.total / postPerPage); i++) {
        pageNumber.push(i);
    }
    const ChangePage = (pageNumber) => {
        setNumber(pageNumber);
    };

    if (postPerPage === 10) {
        min = 5
    }

    if (currentPage === min) {
        min = min + 1
    }

    return (
        <>
            <div className="my-3">
                <button className='wg-pagination-dot' disabled={number === 1 ? true : false} onClick={() => setNumber(number - 1)} > <i class="fa-solid fa-angle-left"></i> </button>

                {pageNumber.map((Elem, index) => (
                    index + 1 <= min || index === pageNumber.length - 1
                        ? <button
                            className="wg-pagination-dot"
                            onClick={() =>
                                setCurrentPage(index + 1)
                            }> {Elem}
                        </button>
                        : index + 1 == min + 1
                            ? <>
                                <Dots />
                            </>
                            : ''
                ))}

                <button className='wg-pagination-dot' disabled={lastPost === props.total ? true : false} onClick={() => setNumber(number + 1)} > <i class="fa-solid fa-angle-right"></i> </button>


            </div>
        </>
    )
}



export default Pagination
