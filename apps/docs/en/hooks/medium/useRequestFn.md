# useRequestFn

Async request hook, manages loading state, error, and data.

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
