import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Shafagh Rastegari",
    age: "22",
    university: "IUST",
  })
  const namehandeler = () => {
    setPerson({ ...person, university:"Iran university of science and technology" })
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.university}</h3>
    <button className="btn" onClick={()=>namehandeler()}>Change uni name</button>
  </>;
};

export default UseStateObject;
