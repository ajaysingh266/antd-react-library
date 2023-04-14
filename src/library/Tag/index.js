import React from 'react';
import Webotag from './Tag'
import Webobutton from '../Button/Button'
import { useState } from 'react';

const Index = () => {

    const [visible, setVisible] = useState(true);
    const log = (e) => {
        console.log(e);
    };

    const preventDefault = (e) => {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
    };
    console.log("visible",visible);


    return (
        <>
            {/* <div className='flex items-center justify-evenly'>
                <Webotag>Tag 1</Webotag>
                <Webotag>
                    <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
                </Webotag>
                <Webotag closable onClose={log}>
                    Tag 2
                </Webotag>
                <Webotag closable onClose={preventDefault}>
                    Prevent Default
                </Webotag>
            </div>
            <div>
                <Webotag color="magenta">magenta</Webotag>
                <Webotag color="red">red</Webotag>

                <Webotag color="volcano">volcano</Webotag>
                <Webotag color="orange">orange</Webotag>
                <Webotag color="gold">gold</Webotag>
                <Webotag color="lime">lime</Webotag>
                <Webotag color="green">green</Webotag>
                <Webotag color="cyan">cyan</Webotag>
                <Webotag color="blue">blue</Webotag>
                <Webotag color="geekblue">geekblue</Webotag>
                <Webotag color="purple">purple</Webotag>
            </div> */}
            <div>
                <Webotag closable visible={visible} onClose={() => setVisible(false)}>
                    Movies
                </Webotag>
                <br />
                <Webobutton size="small" onClick={() => setVisible(!visible)}>
                    Toggle
                </Webobutton>
            </div>

        </>
    );
}

export default Index;