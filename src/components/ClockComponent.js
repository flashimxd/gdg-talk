import React from 'react';
import { getHours, getMinutes, getSeconds } from 'date-fns';

class Clock extends React.Component {
  state = {
    time: '',
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const time = this.getTime();
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getTime = () => {
    const now = new Date();
    const minutes =
      getMinutes(now).toString().length !== 1 ? getMinutes(now) : `0${getMinutes(now)}`;
    return `${getHours(now)}:${minutes}:${getSeconds(now)}`;
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>What time is it? </h1>
        <div className="timer">{time}</div>
      </div>
    );
  }
}

export default Clock;
