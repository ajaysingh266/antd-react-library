import React from 'react'
import Tooltip from './Tooltip'
import Button from '../Button/Button'


const Index = () => {
    const text = <span>prompt text</span>;
    const buttonWidth = 70;
    return (
        <>
            <div className="App">
            <div style={{ marginLeft: buttonWidth* 3 + 24, whiteSpace: 'nowrap' }}>
                    <Tooltip placement="topLeft" title={text}>
                        <Button>TL</Button>
                    </Tooltip>
                    <Tooltip placement="top" title={text}>
                        <Button>Top</Button>
                    </Tooltip>
                    <Tooltip placement="topRight" title={text}>
                        <Button>TR</Button>
                    </Tooltip>
                </div>
                <div style={{ width: buttonWidth, float: 'left',marginLeft: buttonWidth* 2 + 24 }}>
                    <Tooltip placement="leftTop" title={text}>
                        <Button>LT</Button>
                    </Tooltip>
                    <Tooltip placement="left" title={text}>
                        <Button>Left</Button>
                    </Tooltip>
                    <Tooltip placement="leftBottom" title={text}>
                        <Button>LB</Button>
                    </Tooltip>
                </div>
                <div style={{ width: buttonWidth, marginLeft: buttonWidth * 6 + 24 }}>
                    <Tooltip placement="rightTop" title={text}>
                        <Button>RT</Button>
                    </Tooltip>
                    <Tooltip placement="right" title={text}>
                        <Button>Right</Button>
                    </Tooltip>
                    <Tooltip placement="rightBottom" title={text}>
                        <Button>RB</Button>
                    </Tooltip>
                </div>
                <div style={{ marginLeft: buttonWidth* 3 + 24, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Tooltip placement="bottomLeft" title={text}>
                        <Button>BL</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title={text}>
                        <Button>Bottom</Button>
                    </Tooltip>
                    <Tooltip placement="bottomRight" title={text}>
                        <Button>BR</Button>
                    </Tooltip>
                </div>


            </div>



        </>
    )
}

export default Index
