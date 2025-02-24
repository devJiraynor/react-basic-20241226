import React from 'react';
import Component, { ClassComponent, FunctionalComponent } from './component/Component'
import './App.css';

function App() {
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />
      <Component />
    </div>
  );
}

export default App;
