import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Select} from './Select';
import {Option} from './Select/types';

const options: Option[] = [{
  label: 'Option 1',
  value: 'option1'
}]

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
      <Select options={options} />
    </div>
  );
}

export default App;
