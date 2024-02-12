import React, { useState, useEffect } from 'react';
import { CircularProgress } from "@nextui-org/react";

const CountDown = ({ seconds, onFinish }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1)
      } else {
        clearInterval(interval);
        onFinish();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onFinish]);

  return (
    <div className="z-50 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0" aria-hidden="true" style={{ opacity: 1 }}>
      <div aria-label="count-down" className="flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px] items-center" style={{ opacity: 1, transform: 'translateY(0px) scale(1) translateZ(0px)' }}>
        {time > 0 ? (
          <CircularProgress
            classNames={{
              svg: "w-60 h-60 drop-shadow-md",
              indicator:  `stroke-warning animate-fade bg-white/10 stroke-[3px]`,
              track: "stroke-white/10 animate-fade drop-shadow-md stroke-[3px]",
              value: "text-7xl font-semibold text-white animate-fade drop-shadow-md",
            }}
            formatOptions={{ style: "decimal" }}
            value={time}
            minValue={0}
            maxValue={seconds}
            strokeWidth={4}
            showValueLabel={true}
          />
        ) : (
          <span aria-label="count-down" className="main-title text-6xl text-black animate-fade">Good Luck!</span>
        )}
      </div>
    </div>
  );
};

export default CountDown;