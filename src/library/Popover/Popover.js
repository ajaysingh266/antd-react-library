import React, { useState } from "react";
import './popover.css'


const Popover = (props) => {
  
 
  const [active, setActive] = useState(false);
  let showTip , hideTip;
  if (props.trigger == "hover") {

     showTip = () => {
      setActive(true);
    };

     hideTip = () => {
      
      setActive(false);
    };
  }
  
  const setFocus = (e) =>{
    setActive(true)
  }

  const onhandleChange = () => {
    

    if (props.trigger == "click") {
        setActive(!active);      
  }
  }


  return (
    <span
      className="Popover-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onClick = {onhandleChange}
      onFocus={setFocus}
      onBlur={()=>setActive(false)}
    >
      {props.children}
      {active && (
        <div className={`Popover-container ${props.placement || "top"}`}>
          {props.title}
          {props.content}
        </div>
      )}
    </span>
  );
};
export default Popover;






