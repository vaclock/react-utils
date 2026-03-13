import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * 
input: a → ab → abc
delay: 500

value:
a -------(500ms)------> abc

1 支持泛型
2 input 改变时重新 debounce
3 组件卸载时清理 timer
4 delay 变化时行为正确
 */
export function useDebounceValue<T>(value: T, delay: number) {
  const [state, setState] = useState<T>(value);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setState(value);
    }, delay);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);
  return state;
}

/**
1 支持 args
2 fn 必须永远是最新（解决 stale closure）
3 delay 改变时行为正确
4 不触发额外 rerender
const run = useThrottleFn(fn, 500)
run() run() run()
只执行一次
 */
export function useThrottleFn<T extends (...args: any) => any>(
  fn: T,
  delay: number
) {
  const callbackRef = useRef(fn);
  callbackRef.current = fn;
  const startRef = useRef(0);
  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - startRef.current >= delay) {
        callbackRef.current(...args);
        startRef.current = now;
      }
    },
    [delay]
  );
}

// const run = useThrottleFn(fn, {
//   wait: 500,
//   leading: true,
//   trailing: true
// })

/**

leading = true
第一次立即执行

trailing = true
最后一次补执行
wait: 1000, leading: true, trailing: true
t0 run(1)
t200 run(2)
t400 run(3)
t600 run(4)

结果: t0 run1, t1000 run4

 */
type Options = {
  wait: number;
  leading: boolean;
  trailing: boolean;
};
export function useThrottleFnTurbo<T extends (...args: any[]) => any>(
  fn: T,
  options: Options
) {
  const callback = useRef(fn);
  callback.current = fn;
  const { wait, leading, trailing } = options;
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const lastInvokeTimeRef = useRef(0);
  const lastArgsRef = useRef<Parameters<T>>(undefined);
  const invoke = useCallback((time: number) => {
    lastInvokeTimeRef.current = time;
    callback.current(...(lastArgsRef.current || []));
    clearTimeout(timerRef.current);
  }, []);
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);
  return useCallback(
    (...args: Parameters<T>) => {
      lastArgsRef.current = args;
      const remain = wait - (Date.now() - lastInvokeTimeRef.current);
      if (remain <= 0) {
        // 剩余时间小于0
        if (leading) {
          invoke(Date.now());
        }
      } else if (trailing && !timerRef.current) {
        timerRef.current = setTimeout(() => {
          timerRef.current = undefined;
          invoke(Date.now());
        }, remain);
      }
    },
    [wait, leading, trailing]
  );
}
