import React from 'react';
import { useRequestFn } from '@vaclock/utils';

// Mock API
const mockApi = (id: number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.7) reject(new Error('Random failure'));
    else resolve({ id, name: `User ${id}`, role: 'Admin' });
  }, 1000);
});

export const RequestDemo = () => {
  const [state, fetchUser] = useRequestFn(async (id: number) => {
    const res = await mockApi(id);
    return res;
  });

  const handleFetch = () => {
    fetchUser(Math.floor(Math.random() * 100));
  };

  return (
    <div className="demo-container">
      <button 
        className="action-btn" 
        onClick={handleFetch} 
        disabled={state.loading}
      >
        {state.loading ? 'Loading...' : 'Fetch Random User'}
      </button>

      {state.error && <div className="error">Error: {state.error.message}</div>}
      {state.value && <pre className="result">{JSON.stringify(state.value, null, 2)}</pre>}

      <style>{`
        .demo-container {
          padding: 20px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .action-btn {
          padding: 8px 16px;
          background-color: var(--vp-c-brand);
          color: white;
          border-radius: 4px;
          opacity: 1;
          border: none;
          cursor: pointer;
        }
        .action-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .error {
          margin-top: 10px;
          color: var(--vp-c-red);
        }
        .result {
          margin-top: 10px;
          background: var(--vp-c-bg-alt);
          padding: 10px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};
