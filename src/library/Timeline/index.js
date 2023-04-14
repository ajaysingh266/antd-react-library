import React, { useState } from 'react'
import Timeline from './Timeline'
import Timeline_item from './Timeline_item'
import './Timeline.css'
import { BsEmojiSmile } from 'react-icons/bs'
import Button from '../Button/Button'
import { AiOutlineClockCircle } from 'react-icons/ai'



const Index = () => {
    const [reverse, setReverse] = useState(false);

    const handleClick = () => {
        setReverse(!reverse);
    };

    return (
        <>

          
                <Timeline pending="Recording..." reverse={reverse} mode="alternate">
                    <Timeline_item color="green">Create a services site 2015-09-01</Timeline_item>
                    <Timeline_item color="green">Create a services site 2015-09-01</Timeline_item>
                    <Timeline_item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline_item>
                    <Timeline_item>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline_item>
                    <Timeline_item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline_item>
                    <Timeline_item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline_item>
                    <Timeline_item color="#00CCFF" dot={<BsEmojiSmile />}>
                        <p>Custom color testing</p>
                    </Timeline_item>
                </Timeline>
                <Button
                    type="primary"
                    onClick={handleClick}
                >
                    Toggle Reverse
                </Button>
           
        
        </>
    )
}

export default Index
