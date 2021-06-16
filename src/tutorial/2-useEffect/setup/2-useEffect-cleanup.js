import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const check = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',check);
    // return () => {
    //   window.removeEventListener('resize',check);
    // };
  },[]);
  return <>
    <h1>window size</h1>
    <h1>{size} px</h1>
  </>;
};

export default UseEffectCleanup;
