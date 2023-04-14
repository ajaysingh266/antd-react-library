import React, { useState } from 'react'
import Modal from './Modal';
import Button from '../Button/Button'


const Index = () => {
    // let rootDIV = document.querySelector('body')

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
        // rootDIV.style.overflow = 'hidden'
    };
    const handleOk = () => {
        setTimeout(() => {
            setLoading(false);
            setIsModalVisible(false);
        }, 2000);
    };

    const handleCancel = () => {
        setIsModalVisible(false);

        // rootDIV.removeAttribute('style')
    };


    return (
        <>
            <div>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                   

                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Submit
                        </Button>,
                        <Button
                            key="link"
                            href="https://google.com"
                            type="primary"
                            loading={loading}
                            onClick={handleOk}
                        >
                            Search on Google
                        </Button>,
                    ]}

                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </>
    )
}

export default Index
