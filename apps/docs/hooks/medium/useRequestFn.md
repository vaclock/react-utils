# useRequestFn

异步请求 Hook，管理加载状态、错误和数据。

## Usage

```tsx
import { useRequestFn } from '@react-utils/hooks';

const [state, fetchUser] = useRequestFn(async (id) => {
  const res = await fetch(`/api/user/${id}`);
  return res.json();
});

// state.loading
// state.value
// state.error
```

## Demo

<RequestDemo />
