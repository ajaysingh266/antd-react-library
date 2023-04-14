import React from 'react'
import Weboform from './Form'
import Weboformitem from './Formitem'
import Button from '../Button/Button'
import Weboinput from "../Input/Input"
import WeboCheck from "../Checkbox/Checkbox"


const Index = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <>

            <div className='mt-2 ml-6'>
                <Weboform name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Weboformitem
                        label="Username :"
                        name="username"
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]
                        }
                    >
                        <Weboinput />
                    </Weboformitem>

                    <Weboformitem
                        label="Password : "
                        name="password"
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]
                        }
                    >
                        <Weboinput type="password" />
                    </Weboformitem>

                    <Weboformitem
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }} >

                        <WeboCheck className=" ml-4" />Remember me
                    </Weboformitem>

                    <Weboformitem
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Weboformitem>
                </Weboform>
            </div>
        </>
    )
}

export default Index
