import React from 'react'
import AutoCarousel from './AutoCarousel'
// import { Carousel } from 'antd';
import Carousel from './Carousel'
import './index.css'


const Index = () => {

    return (
        <>
            <div>
                <Carousel />
            </div>
            <div className=' mt-6'>
                <AutoCarousel />
            </div>
        </>
    )
}

export default Index



