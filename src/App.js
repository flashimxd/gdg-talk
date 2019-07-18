import React, { useReducer } from 'react';
import './App.css';
import ClockComponent from './components/ClockComponent';

const INITIAL_STATE = {
  show: true,
};

const CONTANTS = {
  SHOW_CLOCK: 'show_clock',
  HIDE_CLOCK: 'hide_clock',
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTANTS.SHOW_CLOCK:
      return { ...state, show: true };
    case CONTANTS.HIDE_CLOCK:
      return { ...state, show: false };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  const { show } = state;
  const setVisibility = () => {
    if (show) {
      dispatch({ type: CONTANTS.HIDE_CLOCK });
    } else {
      dispatch({ type: CONTANTS.SHOW_CLOCK });
    }
  };

  return (
    <div className="App">
      {show && <ClockComponent />}
      <button className="button_container" onClick={setVisibility}>{`${
        show ? 'Hide' : 'Show'
      } the Clock`}</button>
    </div>
  );
};

export default App;
