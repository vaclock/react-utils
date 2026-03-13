# useAsyncQueue

异步任务队列 Hook，支持按顺序执行异步任务。

## Usage

```tsx
import { useAsyncQueue } from '@vaclock/utils';

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
