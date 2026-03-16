import { useEffect, useRef, useState } from 'react';

interface Options {
  target: number; // 目标时间戳（毫秒）
  interval?: number; // 刷新间隔，默认1000ms
}

function format(time: number) {
  const totalSeconds = Math.max(0, Math.floor(time / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function useCountdown(options: Options) {
  const { target, interval = 1000 } = options;
  const [time, setTime] = useState(Math.max(0, target - Date.now()));
  const targetRef = useRef<number>(target);
  useEffect(() => {
    const timer = setInterval(() => {
      const rest = targetRef.current - Date.now();
      setTime(Math.max(0, rest));
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  return [time, format] as const;
}
