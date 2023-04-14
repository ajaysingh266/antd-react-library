import React from 'react'
import Button from './Button'

const Index = () => {
    return (
        <div className='flex  justify-between mt-4'>

            <Button type="primary" shape="circle" size="large" >Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed" shape="round" size="small"  >Dashed Button</Button>

            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>

        </div>
    )
}

export default Index
