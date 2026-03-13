import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T) {
  const last = useRef<T | undefined>(undefined);
  useEffect(() => {
    last.current = value;
  }, [value]);
  return last.current;
}
