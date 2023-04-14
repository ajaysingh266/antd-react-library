import React, { useState } from 'react'
import CheckAll from './CheckAll';
import Checkbox from './Checkbox'



const Index = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e) => {
        console.log("check", e);
        setIsChecked(!isChecked);


    };

    return (
        <div >
            <Checkbox
                type="checkbox"
                value="Paneer"
                checked={isChecked}
                onChange={handleOnChange}
            // disabled
            > Checkbox</Checkbox>

            <div className='mt-10'>
                <CheckAll />
            </div>
        </div>
    )
}

export default Index
