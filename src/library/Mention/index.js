import React from 'react'
import { Mentions } from 'antd';
import './mention.css'
import Webomention from './Mention'
// import Webooption from './Options'

const Index = () => {

    const { Option } = Mentions;
    const { OptionsMenu } = Webomention;


    const onChange = (value) => {
        // console.log('Change:', value);
        ''
    };

    const onSelect = (Webooption) => {
        // console.log('select', Webooption);
        ''
    };




    return (
        <>
            {/* <Mentions
                style={{
                    width: '100%',
                }}
                onChange={onChange}
                onSelect={onSelect}
                defaultValue="@afc163"
            >
                <Option value="afc163">afc163</Option>
                <Option value="zombieJ">zombieJ</Option>
                <Option value="yesmeck">yesmeck</Option>
            </Mentions> */}
            <div className='mt-6'>
                <Webomention
                    style={{
                        "width": '100%'
                    }}
                    onChange={onChange}
                    onSelect={onSelect}
                    defaultValue="@afc163"
                    options={''}
                    
                >
                    <OptionsMenu value="afc163">afc163</OptionsMenu>
                    <OptionsMenu value="zombieJ">zombieJ</OptionsMenu>
                    <OptionsMenu value="yesmeck">yesmeck</OptionsMenu>
                </Webomention>
            </div>


        </>
    )
}

export default Index
