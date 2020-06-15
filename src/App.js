import React from 'react';
import './App.css';
import SearchCity from './SearchCity';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <h1>Weather Forecast</h1>
        <SearchCity/>
      </div>
    );
  }
}

export default App;
