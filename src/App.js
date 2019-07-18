import React from 'react';
import './App.css';
import ClockComponent from './components/ClockComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClockComponent />
      </div>
    );
  }
}

export default App;
