import React from "react";

const TextInput = ({id, label, value, setValue}) => {
    return(
        <div>
          <label htmlFor={id}>{label} </label>
          <input type="text" name={id} 
          id={id} 
          value={value}
          onChange={(element) => setValue(element.target.value)}/>
        </div>
    )
}

export default TextInput