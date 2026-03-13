import { useLayoutEffect, useRef, useState } from 'react';

export function useSyncExternalStore<T>(
  subscribles: (onStoreChange: () => void) => () => void,
  getSnapshot: () => T
): T {
  const [value, setValue] = useState<T>(() => {
    return getSnapshot();
  });
  const lastSnapShot = useRef<T | null>(null);
  useLayoutEffect(() => {
    const onChange = () => {
      const currentSnapShot = getSnapshot();
      if (
        lastSnapShot.current !== null &&
        Object.is(lastSnapShot.current, currentSnapShot)
      )
        return;
      setValue(currentSnapShot);
      lastSnapShot.current = currentSnapShot;
    };
    const unsubscrible = subscribles(onChange);
    onChange();
    return () => {
      unsubscrible();
    };
  }, [subscribles, getSnapshot]);
  return value;
}
