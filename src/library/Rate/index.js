import React, { useState } from 'react'
import Rate from './Rate'
import RateDisabled from './RateDisabled';
import './Rate.css'


const Index = () => {

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const [rating, setRating] = useState(2);

    const handleChange = (value) => {
        setRating(value);
        console.log("value", value);
    }
    return (
        <>
            


            <Rate
                Tooltips={desc}
                count={5}
                value={rating}
                onChange={handleChange}
                activeColor={'yellow'}
                inactiveColor={'#ddd'}
                
            />
            <div>
                <RateDisabled
                    Tooltips={desc}
                    count={5}
                    defaultvalue={1}
                    activeColor={'yellow'}
                    inactiveColor={'#ddd'}
                    disabled
                />
            </div>
        </>
    )
}

export default Index
