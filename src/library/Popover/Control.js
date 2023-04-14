
import React, { useState } from 'react';
import Button from '../Button/Button'
import Popover from './Popover'


const  App = () => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    const hide = () => {
        setClicked(false);
        setHovered(false);
    };

    const handleHoverChange = (visible) => {
        setHovered(visible);
        setClicked(false);
    };

    const handleClickChange = (visible) => {
        setHovered(false);
        setClicked(visible);
    };

    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
        <Popover
            style={{
                width: 500,
            }}
            content={hoverContent}
            title="Hover title"
            trigger="hover"
            visible={hovered}
            onVisibleChange={handleHoverChange}
        >
            <Popover
                content={
                    <div>
                        {clickContent}
                        <a onClick={hide}>Close</a>
                    </div>
                }
                title="Click title"
                trigger="click"
                visible={clicked}
                onVisibleChange={handleClickChange}
            >
                <Button>Hover and click </Button>
            </Popover>
        </Popover>
    );
};

export default App;