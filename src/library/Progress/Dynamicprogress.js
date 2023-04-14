import Button from '../Button/Button'
import Progress from './progress'
import React, { useState } from 'react';

const Dynamic = () => {
    
        const [percent, setPercent] = useState(0);
      
        const increase = () => {
          let newPercent = percent + 10;
      
          if (newPercent > 100) {
            newPercent = 100;
          }
      
          setPercent(newPercent);
        };
      
        const decrease = () => {
          let newPercent = percent - 10;
      
          if (newPercent < 0) {
            newPercent = 0;
          }
      
          setPercent(newPercent);
        };
  return (
    <>
      <Progress percent={percent} />
     
        <Button onClick={increase} > <i class="fa-solid fa-plus"> </i> </Button>
        <Button onClick={decrease} > <i class="fa-solid fa-minus"> </i> </Button>
      
    </>
  );
};

export default Dynamic;