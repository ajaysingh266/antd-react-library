import React from 'react'
import 'antd/dist/antd.css';
import './segmented.css'
import Webosegment from './Segmented';


const Index = () => {
    return (
        <>

            <div >
                <Webosegment
                    options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
            </div>

            <div>
                <Webosegment options={['Map', 'Transit', 'Satellite']} disabled />
                <br />
                <Webosegment
                    options={[
                        'Daily',
                        { label: 'Weekly', value: 'Weekly', disabled: true },
                        'Monthly',
                        { label: 'Quarterly', value: 'Quarterly', disabled: true },
                        'Yearly',
                    ]}
                />
            </div>
        </>
    )
}

export default Index
