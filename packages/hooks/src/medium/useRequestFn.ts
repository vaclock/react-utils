import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type DependencyList,
} from 'react';

export function useRequestFn<T extends (...args: any[]) => any>(
  fn: T,
  deps: DependencyList = [],
  initialState = { loading: false }
) {
  const uniqueId = useRef(0);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  const [state, set] = useState(initialState);
  const callback = useCallback((...args: Parameters<T>) => {
    const requestId = ++uniqueId.current;
    if (!state.loading) {
      set((prev) => ({ ...prev, loading: true }));
    }
    return fn(...args).then(
      (data: Awaited<ReturnType<T>>) => {
        if (mounted.current && requestId === uniqueId.current) {
          set((prev) => ({ ...prev, value: data, error: undefined,  loading: false }));
          return data;
        }
      },
      (err: Error) => {
        if (mounted.current && requestId === uniqueId.current) {
          set((prev) => ({ ...prev, value: undefined, error: err, loading: false }));
          return err;
        }
      }
    );
  }, deps);
  return [state, callback];
}
