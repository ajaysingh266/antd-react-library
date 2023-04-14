import React from 'react'
import './empty.css'
import Weboempty from './Empty'
import Webobutton from '../Button/Button'

const Index = () => {
    return (
        <>


            <Weboempty
                src={'https://icons.veryicon.com/png/o/miscellaneous/designer-icon-1/empty-29.png'}
                width={80}
                height={80} >
                No Data
            </Weboempty>

            <div className='mt-6'>
                <Weboempty
                    src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                        height: 60,
                    }}
                    description={
                        <span>
                            Customize <a href="#API">Description</a>
                        </span>
                    }


                >
                    <Webobutton type="primary">Create Now</Webobutton>
                </Weboempty>
            </div>
        </>
    )
}

export default Index
