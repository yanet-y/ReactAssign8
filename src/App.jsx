import React, { createContext } from 'react';
import Child from './Child';

export const MyContext = createContext();

function App() {
  const value = "Hello Yanet";

  return (
    <MyContext.Provider value={value}>
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <h1>Parent Component</h1>
        <Child />
      </div>
    </MyContext.Provider>
  );
}

export default App;
