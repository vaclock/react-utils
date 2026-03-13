import React, { useState } from 'react';
import { useEvent } from '@vaclock/utils';

export const EventDemo = () => {
  const [count, setCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState('');

  const handleClick = useEvent(() => {
    setCount(c => c + 1);
    setLastClickTime(new Date().toLocaleTimeString());
  });

  return (
    <div className="demo-container">
      <p>Click count: {count}</p>
      <p>Last click: {lastClickTime}</p>
      <button className="action-btn" onClick={handleClick}>
        Click Me
      </button>
      <style>{`
        .demo-container {
          padding: 20px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .action-btn {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: var(--vp-c-brand);
          color: white;
          border-radius: 4px;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};
