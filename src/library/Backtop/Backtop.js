import React from 'react'
import { useState } from 'react'


const Backtop = () => {
    const [backTop, setBackTop] = useState(false);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setBackTop(true)
        } else {
            setBackTop(false)
        }

    })


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }

    return (
        <div>
            {backTop && (
                <button className='wg-backtop'
                    onClick={scrollUp}
                >
                    Up
                </button>
            )}
        </div>
    )
}

export default Backtop
