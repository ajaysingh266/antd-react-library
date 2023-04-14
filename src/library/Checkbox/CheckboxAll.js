import React from "react";

const CheckboxAll = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <input className=" flex flex-col "
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default CheckboxAll;
