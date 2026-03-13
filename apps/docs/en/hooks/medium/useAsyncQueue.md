# useAsyncQueue

Async task queue hook, supports sequential execution of async tasks.

## Usage

```tsx
import { useAsyncQueue } from '@react-utils/hooks';

const { enqueue, result, isRunning } = useAsyncQueue();

const handleClick = () => {
  enqueue(async () => {
    await fetch('/api/data');
    return 'done';
  });
};
```

## Demo

<AsyncQueueDemo />
