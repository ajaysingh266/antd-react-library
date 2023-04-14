
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'

const TOTAL_SLIDES = 3
const arr = [0, 1, 2, 3]
const Carousel = () => {

  const [current, setCurrent] = useState(0)
  const ref = useRef(null)

  const next = () => {
    if (current >= TOTAL_SLIDES) return
    else setCurrent(current + 1)
  }

  const prev = () => {
    if (current === 0) return
    else setCurrent(current - 1)
  }

  const desired = e => {
    setCurrent(Number(e.target.id))
  }

  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`

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
        </div>

        <div className='button-2-container'>
          {arr.map(num => (
            <AiOutlineMinus
              className={ [`button-2 text-3xl ${num === current && 'active text-white text-4xl'}`]}
              onClick={desired}
              id={num}
              key={num}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel


