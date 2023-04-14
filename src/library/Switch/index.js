import React from 'react'
import Weboswitch from './Switch'
import { useState } from 'react'
import Button from '../Button/Button'

const Index = () => {

    const [disabled, setDisabled] = useState(false);

    const toggle = () => {
        setDisabled(!disabled);
    };

    const [value, setValue] = useState(false);

    const onChange = () => {
        setValue(!value);

    }
    // console.log(value)
    // console.log(disabled);
    return (
        <>
            <Weboswitch
                defaultChecked
                disabled={disabled}
                isOn={value}
                onChange={onChange}
                checkedChildren="ON"
                unCheckedChildren="OFF"
            />
            <br />
            <br />
            <Button type="primary"
                onClick={toggle}
            >
                Toggle disabled
            </Button>
        </>
    )
}

export default Index
