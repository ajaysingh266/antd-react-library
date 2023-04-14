import React, { useState } from 'react'
import Description_items from './Description_items'
import Descriptions from './Descriptions'
import './Descriptions.css'
import Button from '../Button/Button'
import Radio from '../Radio/Radio'
import RadioGroup from '../Radio/Radiogroup'




const Index = () => {

    const [size, setSize] = useState('default');

    const onChange = (e) => {
        console.log('size checked', e.target.value);
        setSize(e.target.value);
    };
    return (
        <>
            <Descriptions title="User Info">
                <Description_items label="UserName ">Zhou Maomao</Description_items>
                <Description_items label="Telephone ">1810000000</Description_items>
                <Description_items label="Live ">Hangzhou, Zhejiang</Description_items>
                <Description_items label="Remark ">empty</Description_items>
                <Description_items label="Address ">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Description_items>
            </Descriptions>


            {/* <RadioGroup onChange={onChange} value={size}>
                <Radio value="default">default</Radio>
                <Radio value="middle">middle</Radio>
                <Radio value="small">small</Radio>
            </RadioGroup>
            <br />
            <br />
            <Descriptions
                bordered
                title="Custom Size"
                extra={<Button type="primary">Edit</Button>}
            >
                <Description_items label="Product">Cloud Database</Description_items>
                <Description_items label="Billing">Prepaid</Description_items>
                <Description_items label="time">18:00:00</Description_items>
                <Description_items label="Amount">$80.00</Description_items>
                <Description_items label="Discount">$20.00</Description_items>
                <Description_items label="Official">$60.00</Description_items>
                <Description_items label="Official">$60.00</Description_items>
                <Description_items label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1<br />
                </Description_items>
            </Descriptions>
            <br />
            <br />
            <Descriptions title="Custom Size" extra={<Button type="primary">Edit</Button>}>
                <Description_items label="Product">Cloud Database</Description_items>
                <Description_items label="Billing">Prepaid</Description_items>
                <Description_items label="time">18:00:00</Description_items>
                <Description_items label="Amount">$80.00</Description_items>
                <Description_items label="Discount">$20.00</Description_items>
                <Description_items label="Official">$60.00</Description_items>
            </Descriptions> */}


        </>
    )
}

export default Index



