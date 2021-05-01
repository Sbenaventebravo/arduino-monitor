
import React from 'react';
import Counter from './components/Counter';
import Temperature from './components/Temperature';
import List from './components/List';
function App() {
  return (
    <div className="container">
      <Counter />
      <Temperature/>
      <List />
    </div>
  );
}

export default App;
