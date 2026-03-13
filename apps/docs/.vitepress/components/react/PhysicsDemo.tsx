import React, { useState } from 'react';
import { usePhysics } from '@react-utils/hooks';

export const PhysicsDemo = () => {
  const [position, setPosition] = useState(0);

  const move = () => {
    setPosition(p => p === 0 ? 200 : 0);
  };

  return (
    <div className="demo-container">
      <div 
        className="box"
        style={{ transform: `translateX(${position}px)` }}
      ></div>
      <button className="action-btn" onClick={move}>Animate</button>

      <style>{`
        .demo-container {
          padding: 20px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .box {
          width: 50px;
          height: 50px;
          background-color: var(--vp-c-brand);
          border-radius: 8px;
          margin-bottom: 20px;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .action-btn {
          padding: 8px 16px;
          background-color: var(--vp-c-text-1);
          color: var(--vp-c-bg);
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
