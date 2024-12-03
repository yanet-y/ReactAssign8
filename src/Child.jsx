import React, { useContext } from 'react';
import { MyContext } from './App';

function Child() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {value}</p>
    </div>
  );
}

export default Child;
