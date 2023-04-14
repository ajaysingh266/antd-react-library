import { Divider, Radio, Skeleton, Space, Switch } from 'antd';
import { DotChartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './skeleton.css'
import Weboskelet from './Skeleton'


const Index = () => {
    const [active, setActive] = useState(false);
    const [block, setBlock] = useState(false);
    const [size, setSize] = useState('default');
    const [buttonShape, setButtonShape] = useState('default');
    const [avatarShape, setAvatarShape] = useState('circle');

    const handleActiveChange = (checked) => {
        setActive(checked);
    };

    const handleBlockChange = (checked) => {
        setBlock(checked);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleShapeButton = (e) => {
        setButtonShape(e.target.value);
    };

    const handleAvatarShape = (e) => {
        setAvatarShape(e.target.value);
    };

    return (
        <>


            <div>

                <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
                <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
                <Skeleton.Input active={active} size={size} />

                <br />
                <br />
                <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
                <br />
                <br />
                <Skeleton.Input active={active} size={size} block={block} />
                <br />
                <br />

                <Skeleton.Image active={active} />
                <Skeleton.Node active={active}>
                    <DotChartOutlined
                        style={{
                            fontSize: 40,
                            color: '#bfbfbf',
                        }}
                    />
                </Skeleton.Node>



            </div>
        </>
    )
}

export default Index
