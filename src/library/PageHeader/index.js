import React from 'react'
import PageHeader from './PageHeader'
import './PageHeader.css'
import Button from '../Button/Button'


const Index = () => {
    return (
        <>
            {/* <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Title"
                    subTitle="This is a subtitle"
                />
            </div> */}
            <div>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Title"
                    subTitle="This is a subtitle"
                    extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                            Primary
                        </Button>,
                    ]}
                >
                    
                   
                    
                </PageHeader>
            </div>

        </>
    )
}

export default Index
