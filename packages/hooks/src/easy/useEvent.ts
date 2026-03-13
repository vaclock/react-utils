import { useCallback, useRef } from 'react';

export function useEvent<T extends (...args: any[]) => any>(fn: T) {
  const callback = useRef(fn);
  callback.current = fn;
  return useCallback((...args: Parameters<T>) => {
    return callback.current(...args);
  }, []);
}
