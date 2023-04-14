import React, { useState } from 'react'
import Select from './Select';
import Option from './Option';
import OptGroup from './Optiongroup'
import './index.css'



const Index = () => {

  const [value, setValue] = useState();

 
  const onChange = (e) => {
    console.log("checked", e );
        setValue(e.target.value);
    
      }
      return (
        <>
          <label>Select without group</label>
          <Select onChange={onChange} value={value} defaultValue=".com"  >
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn" disabled>.cn</Option>
            <Option value=".org" >.org</Option>
          </Select>
    
    
    
          <label className='ml-10'  >Select with group</label>
          <Select onChange={onChange} value={value} defaultValue=".org"  >
    
            <OptGroup label="Manager">
              <Option value=".com">.com</Option>
              <Option value=".jp">.jp</Option>
            </OptGroup >
            <OptGroup label="engineer">
              <Option value=".cn" disabled>.cn</Option>
              <Option value=".org" >.org</Option>
            </OptGroup >
          </Select>
        </>
      )
    }
    
    export default Index
    
