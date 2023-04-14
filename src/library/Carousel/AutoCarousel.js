import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'


const TOTAL_SLIDES = 3
const arr = [0, 1, 2, 3]
const AutoCarousel = () => {
    const [current, setCurrent] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        if (current < arr.length) {
            ref.current.style.transition = 'all 0.2s ease-in-out'
            ref.current.style.transform = `translateX(-${current}00%)`
            const next = (current + 1) % arr.length
            const id = setTimeout(() => setCurrent(next), 4000);
            return () => clearTimeout(id);
        }
    }, [current])
    console.log(current);
    return (
        <>
            <div className='wrapper'>

                <div className='frame'>
                    <div className='box-container' ref={ref}>
                        <div className='box'>1</div>
                        <div className='box'>2</div>
                        <div className='box'>3</div>
                        <div className='box'>4</div>
                    </div>
                    <div className='button-2-container'>
                        {arr.map(num => (
                            <AiOutlineMinus
                                className={[`button-2 text-3xl ${num === current && 'active text-white text-4xl'}`] }

                                id={num}
                                key={num}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AutoCarousel
