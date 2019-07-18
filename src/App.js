import React from 'react';
import './App.css';
import ClockComponent from './components/ClockComponent';

class App extends React.Component {
  state = {
    show: true,
  };

  setVisibility = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <div className="App">
          {show && <ClockComponent />}
          <button className="button_container" onClick={this.setVisibility}>{`${
            show ? 'Hide' : 'Show'
          } the Clock`}</button>
        </div>
      </>
    );
  }
}
export default App;
