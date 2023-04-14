
import React, { useState } from 'react'
import './InputNumber.css'

import UpSvg from '../../assets/up_arrow.svg'
import DownSvg from '../../assets/down_arrow.svg'


const Index = () => {
    const [inputValue, setInputValue] = useState(10)

    const [style, setStyle] = useState('wg_input_number flex justify-between group hover:border-cyan-200')
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(0)


    const onChange = (e) => {
        setInputValue(e.target.value);
    }
    const increaseInputValue = () => {
        if (inputValue + 1 > max) {
            console.log('max disable');
            return;

        }
        setInputValue(inputValue + 1);
    }
    console.log(inputValue);

    const decreaseInputValue = () => {
        if (inputValue - 1 < min) {         
            console.log('min disable');     
            return;
        }
        setInputValue(inputValue - 1);

    }
    return (
        <>

            <div class={style} onClick={() => {
                setStyle(style + ' wg_input_number_focused')
            }}>
                <div class="wg_input_number_input_wrap">
                    <input
                        class="wg-input-number-input"
                        type="number"
                        value={inputValue}
                        step="1"
                        min={0}
                        max={10}
                        onChange={onChange}
                    />
                </div>
                <div class="wg_input_number_handler_wrap mr-1 mt-1">
                    <div class='hidden group-hover:block '>
                        <div className='wg_input_number_handler_wrap_up'  onClick={increaseInputValue}>
                            <img src={UpSvg} />
                        </div>
                        <div className='wg_input_number_handler_wrap_down' onClick={decreaseInputValue}>
                            <img src={DownSvg} />
                        </div>

                    </div>
                </div>
            </div>
        </>



    );
};
export default Index;