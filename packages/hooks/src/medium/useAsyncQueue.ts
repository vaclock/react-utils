import { useCallback, useEffect, useRef, useState } from 'react';
type AsyncFn<T> = () => Promise<T>;

type AsyncResult<T> = {
  value: T | undefined;
  error: Error | null;
};
type QueueItem<T> = {
  order: number;
  fn: AsyncFn<T>;
};
export function useAsyncQueue<T>() {
  const [result, setResult] = useState<AsyncResult<T>[]>([]);
  const [running, setRuning] = useState(false);
  const processing = useRef(false);
  const order = useRef<number>(1);
  const queue = useRef<QueueItem<T>[]>([]);
  const run = useCallback(() => {
    if (queue.current.length === 0) return setRuning(false);
    if (processing.current) return;
    const item = queue.current?.shift();
    if (!item) return;
    const { fn, order } = item;
    setRuning(true);
    processing.current = true;
    fn()
      .then((data) => {
        setResult((prev) => {
          const next = [...prev];
          next[order] = { value: data, error: null };
          return next;
        });
      })
      .catch((error: Error) => {
        setResult((prev) => {
          const next = [...prev];
          next[order] = { value: undefined, error: error };
          return next;
        });
      })
      .finally(() => {
        processing.current = false;
        run();
      });
  }, []);

  const enqueue = useCallback((asyncFn: AsyncFn<T>) => {
    queue.current.push({
      order: order.current++,
      fn: asyncFn,
    });
    run();
  }, []);
  useEffect(() => {
    run();
  }, []);
  return {
    result,
    isRunning: running,
    enqueue,
  };
}
