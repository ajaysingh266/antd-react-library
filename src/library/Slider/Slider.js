import React from 'react'
import './slider.css'

const Slider = (props) => {
  const [value, setValue] = React.useState(props.defaultValue ? props.defaultValue : [])
  let percent = props.value ? props.value : value;


  const increase = () => {
    let newPercent = percent + 1;

    if (newPercent > 100) {

      newPercent = 100;
    }
    console.log("current", percent);
    console.log("increment", newPercent);
    setValue(newPercent);

  };

  const decrease = () => {
    let newPercent = percent - 1;
    // console.log("decrese", newPercent);

    if (newPercent < 0) {


      newPercent = 0;
    }
    // console.log("newpercent", newPercent);
    setValue(newPercent);
  };


  return (
    <>
      <div className='wg-slider'  >
        <div className='wg-slider-rail' onClick={() => {
          decrease()
        }
        }></div>
        <div className='wg-slider-track' style={{ left: "0%", width: `${percent}%` }}></div>
        <div className='wg-slider-step'></div>
        <div className='wg-slider-handle'
          onClick={() => {
            decrease()
          }
          }
          style={{ left: `${percent}%`, transform: "translateX(-50%)" }} >{percent}</div>
      </div>

    </>
  )
}

export default Slider;



