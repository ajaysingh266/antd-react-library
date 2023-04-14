import { useState } from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react';
import './breadcrumb.css'
import Webobreadcrumb from './Breadcrumb'
import Webobreaditem from './Breaditem'


const App = () => {
  
  
  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log('radio checked', e);
    setValue(e.target.value);

    
  }
  
  
  return(
  <>
   

    <div>
      <Webobreadcrumb onChange={onChange} >
        <Webobreaditem>Home</Webobreaditem>
        <Webobreaditem>
          <a className='text-[#40BCFF]' href="https://www.google.co.in/">Application Center</a>
        </Webobreaditem>
        <Webobreaditem>
          <a className='text-[#40BCFF]' href="">Application List</a>
        </Webobreaditem>
        <Webobreaditem>An Application</Webobreaditem>
      </Webobreadcrumb>

    </div>

    <div>
      <Webobreadcrumb>
        <Webobreaditem href="" icon={<HomeOutlined />}>
          
        </Webobreaditem>
        <Webobreaditem href="" icon = {<UserOutlined />}>
          
          <span>Application List</span>
        </Webobreaditem>
        <Webobreaditem>Application</Webobreaditem>
      </Webobreadcrumb>
    </div>

  

   

   

    <div>
      <Webobreadcrumb >
        <Webobreaditem>Location :</Webobreaditem>

        <Webobreaditem href="">Application Center</Webobreaditem>

        <Webobreaditem href="">Application List</Webobreaditem>

        <Webobreaditem>An Application</Webobreaditem>
      </Webobreadcrumb>
    </div>

    <div>
    <Webobreadcrumb>
    <Webobreaditem>Ant Design</Webobreaditem>
    <Webobreaditem>
      <a href="">Component</a>
    </Webobreaditem>
    {/* <Webobreaditem overlay={Select}>
      <a href="">General</a>
    </Webobreaditem> */}
    <Webobreaditem>Button</Webobreaditem>
  </Webobreadcrumb>
    </div> 



  </>

);
  }

export default App;