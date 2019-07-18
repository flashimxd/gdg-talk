import React, { useState, useEffect } from 'react';
import { getHours, getMinutes, getSeconds } from 'date-fns';

const getTime = () => {
  const now = new Date();
  const minutes = getMinutes(now).toString().length !== 1 ? getMinutes(now) : `0${getMinutes(now)}`;
  return `${getHours(now)}:${minutes}:${getSeconds(now)}`;
};

const Clock = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    console.log('Component will mount');
  }, []);

  useEffect(() => {
    console.log('I will run everytime the time changes');
    const timer = setInterval(() => {
      const currentTime = getTime();
      setTime(currentTime);
    }, 1000);

    return () => {
      console.log('Component will unmount');
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>What time is it? </h1>
      <div className="timer">{time}</div>
    </div>
  );
};

export default Clock;
