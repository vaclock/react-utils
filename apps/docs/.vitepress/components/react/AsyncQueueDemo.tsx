import React, { useState } from 'react';
import { useAsyncQueue } from '@vaclock/utils';

export const AsyncQueueDemo = () => {
  const { enqueue, isRunning } = useAsyncQueue();
  const [logs, setLogs] = useState<string[]>([]);

  const addToQueue = (id: number) => {
    setLogs(prev => [...prev, `Enqueuing task ${id}...`]);
    enqueue(async () => {
      setLogs(prev => [...prev, `Start task ${id}`]);
      await new Promise(r => setTimeout(r, 1000));
      setLogs(prev => [...prev, `Finish task ${id}`]);
      return `Result ${id}`;
    });
  };

  return (
    <div className="demo-container">
      <div className="controls">
        <button className="action-btn" onClick={() => addToQueue(1)}>Add Task 1</button>
        <button className="action-btn" onClick={() => addToQueue(2)}>Add Task 2</button>
        <button className="action-btn" onClick={() => addToQueue(3)}>Add Task 3</button>
      </div>
      
      <div className="status">
        Status: <span className={isRunning ? 'running' : ''}>{isRunning ? 'Running' : 'Idle'}</span>
      </div>

      <div className="logs">
        {logs.map((log, i) => (
          <div key={i} className="log-item">{log}</div>
        ))}
      </div>

      <style>{`
        .demo-container {
          padding: 20px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .controls {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }
        .action-btn {
          padding: 6px 12px;
          background-color: var(--vp-c-brand);
          color: white;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
        .status {
          margin-bottom: 10px;
          font-weight: bold;
        }
        .running {
          color: var(--vp-c-green);
        }
        .logs {
          background: var(--vp-c-bg-alt);
          padding: 10px;
          border-radius: 4px;
          font-family: monospace;
          max-height: 200px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};
