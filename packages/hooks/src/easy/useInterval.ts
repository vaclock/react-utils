import { useEffect, useRef } from 'react';

export function useInterval<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  const callback = useRef(fn);
  callback.current = fn;
  useEffect(() => {
    if (delay === null) return;
    let timer = setInterval(() => {
      callback.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
}
