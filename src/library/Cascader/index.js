import React from 'react'
import Cascader from './Cascader'
import './index.css'

const index = () => {
    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
                {
                    value: 'hangzhou1',
                    label: 'Hangzhou1',
                    children: [
                        {
                            value: 'xihu1',
                            label: 'West Lake1',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        }
                    ]
                }
            ]
        },
    ];

    const onChange = (value) => {
        console.log(value);
    };
    return (
        <>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
            />
        </>
    )
}

export default index
