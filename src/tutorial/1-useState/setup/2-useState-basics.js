import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Shafagh");
  const clickHandler = () => {
    if(text === "Shafagh")
      setText('Shafagh Rastegari')
    else
      setText("Shafagh")
  }
  return (
  <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>Change Name</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
