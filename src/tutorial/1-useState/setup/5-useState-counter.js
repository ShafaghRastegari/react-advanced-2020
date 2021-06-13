import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const complex = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      })
    },2000)
  }
  return <>
  <section style={{margin:"4rem 0"}}>
      <h2>counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
      <button className="btn" onClick={()=>setValue(0)}>Reset</button>
      <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
      <h2>complex increase</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complex}>complex insrease</button>
  </section>
  </>;
};

export default UseStateCounter;
