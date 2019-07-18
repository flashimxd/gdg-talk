import React, { useState, useReducer } from 'react';
import './App.css';
import ClockComponent from './components/ClockComponent';

const INITIAL_STATE = {
  visibility: true,
};

const CONTANTS = {
  SHOW_CLOCK: 'show_clock',
  HIDE_CLOCK: 'hide_clock',
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTANTS.SHOW_CLOCK:
      return { ...state, visibility: true };
    case CONTANTS.HIDE_CLOCK:
      return { ...state, visibility: false };
    default:
      return state;
  }
};

const App = () => {
  // const [visibility, setVisibility] = useState(true);
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  console.log(state);
  const { visibility } = state;
  return (
    <div className="App">
      {visibility && <ClockComponent />}
      <button
        onClick={() => {
          visibility
            ? dispatch({ type: CONTANTS.HIDE_CLOCK })
            : dispatch({ type: CONTANTS.SHOW_CLOCK });
        }}>{`${visibility ? 'Hide' : 'Show'} the Clock`}</button>
    </div>
  );
};

export default App;
