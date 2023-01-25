import React, { useEffect, useState } from "react";
import './Clock.css';

function Clock() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString([], {timeStyle: 'short'}));
    }, 1000);
  }, []);
  return <div className='clock-text'>{ clockState }</div>;
}
export default Clock;