import React from 'react';
import Radio from './Radio';
import Radiogroup from './Radiogroup';
import { useState } from 'react';
import RadioButton from './RadioButton';


const Index = () => {

  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log('radio checked', e);
    setValue(e.target.value);

    
  }
  return (
    <>
      
      <Radiogroup  onChange={onChange} value={value}  defaultValue={2} >
        <Radio  value={1} name = 'aaaa' size="large">A</Radio>
        <Radio value={2} name = 'bbbb' size="medium">B</Radio>
        <Radio value={3} name = 'cccc' disabled>C</Radio>
        <Radio value={4} name = 'dddd' size="small">D</Radio>
      </Radiogroup>


<Radiogroup onChange={onChange} defaultValue="a" value = {value}  buttonStyle="solid">
      <RadioButton value="a"  disabled >Hangzhou</RadioButton>
      <RadioButton value="b"  size="large"  >Shanghai</RadioButton>
      <RadioButton value="c"  size="medium">Beijing</RadioButton>
      <RadioButton value="d"  size="small" >Chengdu</RadioButton>
    </Radiogroup>
    
    </>
  )
}
export default Index






