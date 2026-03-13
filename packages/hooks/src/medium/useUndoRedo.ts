import { useCallback, useRef, useState } from 'react';

class Node<T> {
  prev: Node<T> | null = null;
  next: Node<T> | null = null;
  val: T;
  constructor(val: T, prev?: Node<T>) {
    this.val = val;
    if (prev) {
      this.prev = prev;
      prev.next = this;
    }
  }
}

export function useUndoRedo<T>(initValue: T) {
  // state, redo, undo, set
  const [state, setState] = useState(initValue);
  const currentRef = useRef(new Node(initValue));
  const set = useCallback((value: T) => {
    const node = new Node(value, currentRef.current);
    currentRef.current = node;
    setState(value);
  }, []);
  const redo = useCallback(() => {
    if (!currentRef.current.prev) return;
    currentRef.current = currentRef.current.prev;
    setState(currentRef.current.val);
  }, []);
  const undo = useCallback(() => {
    if (!currentRef.current.next) return;
    currentRef.current = currentRef.current.next;
    setState(currentRef.current.val);
  }, []);
  return {
    state,
    set,
    redo,
    undo,
  };
}
