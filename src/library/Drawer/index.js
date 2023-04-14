import React, { useState } from 'react'
import Webobutton from '../Button/Button'
import Webodrawer from './Drawer'

const Index = () => {

    const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();


    const showDrawer = () => {
        setVisible(true);
        console.log("true", true);
    };

    const onClose = () => {
        setVisible(false);

    };


  const showDefaultDrawer = () => {
    setSize('default');
    setVisible(true);
  };

  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
  };



    return (
        <>
            {/* <div>
                <Webobutton type="primary" onClick={showDrawer}>
                    Open
                </Webobutton>
                <Webodrawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Webodrawer>
            </div> */}
            <div>
                
                    <Webobutton type="primary" onClick={showDefaultDrawer}>
                        Open Default Size (378px)
                    </Webobutton>
                    <Webobutton type="primary" onClick={showLargeDrawer}>
                        Open Large Size (736px)
                    </Webobutton>
                <Webodrawer
                    title={`${size} Drawer`}
                    placement="right"
                    size={size}
                    onClose={onClose}
                    visible={visible}
                    extra={
                        <div>
                            <Webobutton onClick={onClose}>Cancel</Webobutton>
                            <Webobutton type="primary" onClick={onClose}>
                                OK
                            </Webobutton>
                            </div>
                    }
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Webodrawer>
            </div>
        </>
    )
}

export default Index
