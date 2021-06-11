import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState((data));
  const removeHandeler = (id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }
  return (<>
    {people.map((person) => {
      const { id, name } = person;
      return (<div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={()=>removeHandeler(id)}>Clear</button>
      </div>
      );
    })}
    <button className="btn" onClick={()=>setPeople([])}>Clear Items</button>
  </>);
};

export default UseStateArray;
