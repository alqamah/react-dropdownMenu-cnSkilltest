import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown/>
      <div className='App-header'>
        <p>
          simple dropdown component using React.js
        </p>
        <h4>
          Coding Ninjas React Skilltest
        </h4>
        <h5>
          by Alqama Hasnain
        </h5>
      </div>
    </div>
  );
}

export default App;
