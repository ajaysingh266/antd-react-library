import React from 'react';
import './Result.css'
import Result from './Result';
import Button from '../Button/Button'

const Index = () => (
  <>
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={
        [
          <Button type="primary" key="console"> Go Console</Button>,
          <Button key="buy">Buy Again</Button>,
        ]
      }
    />


  </>
);

export default Index;