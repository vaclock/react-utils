import { useRef } from 'react';

/**
 * const [ref, api] = usePhysics({
  type: 'spring',
  config: { tension: 170, friction: 26 },
  onUpdate: (value) => { 这里的逻辑直接操作 DOM }
});
 */
export type PhysicsOptions = {
  type: 'spring';
  config: { tension: number; friction: number };
  onUpdate: (value: number) => void;
};
export function usePhysics(options: PhysicsOptions) {
//   const { type, config, onUpdate } = options;
  const ref = useRef(undefined);
  // const api = useRef({
  //   type: 'spring',
  //   config: { tension: 170, friction: 26 },
  //   onUpdate: (value) => {},
  // });

  return [ref, {}];
}
