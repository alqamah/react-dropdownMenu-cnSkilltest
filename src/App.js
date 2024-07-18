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
        <h4>
          Coding Ninjas React Skilltest
        </h4>
        <p>
          simple dropdown component using React.js
        </p>
        <a title= "GitHub" href='https://github.com/alqamah'><h5> by Alqama Hasnain</h5></a>
      </div>
    </div>
  );
}

export default App;
