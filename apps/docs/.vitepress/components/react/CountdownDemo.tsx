import React from 'react';
import { useCountdown } from '@react-utils/hooks';

export const CountdownDemo = () => {
  const [time, format] = useCountdown({
    target: Date.now() + 60000,
    interval: 1000,
  });
  const formatted = format(time);

  return (
    <div className="demo-container">
      <div className="time-display">
        {formatted.minutes}m {formatted.seconds}s
      </div>
      <div className="raw-value">
        Remaining ms: {time}
      </div>
      <style>{`
        .demo-container {
          padding: 20px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          text-align: center;
        }
        .time-display {
          font-size: 24px;
          font-weight: bold;
          color: var(--vp-c-brand);
        }
        .raw-value {
          margin-top: 10px;
          color: var(--vp-c-text-2);
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};
