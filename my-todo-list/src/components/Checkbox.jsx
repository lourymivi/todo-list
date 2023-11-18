// src/components/Checkbox.js
import React from 'react';

const Checkbox = ({ isChecked, onChange }) => {
  className ="check";
    return (
      <input type="checkbox" checked={isChecked} onChange={onChange} />
    );
};
    

  

export default Checkbox;