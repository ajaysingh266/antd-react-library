import React from 'react'
import Input from "./Input"

import { AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'



const Index = () => {

  

  const onChange = (e) => {
    console.log( e.target.value);
  }
  return (
    <>
      <Input type="text" placeholder=" Text" size="small" onChange={onChange} required  disabled/>
      <br />
      <br />
      <Input type="password" placeholder=" Password" size="large" onChange={onChange}
        iconRender={(visible) => (visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />)}
      />
      <br />
      <br />
      <Input type="date" onChange={onChange} />

      <br />
      <br />
      <Input size="large" type="email" placeholder="email" prefix={<AiOutlineUser />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<AiOutlineUser />} />


    </>
  );


}

export default Index
