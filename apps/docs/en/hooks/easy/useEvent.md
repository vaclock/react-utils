# useEvent

A persistent event callback hook that uses `useRef` to keep the function reference stable, avoiding closure traps.

## Usage

```tsx
import { useEvent } from '@react-utils/hooks';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  
  const onClick = useEvent(() => {
    console.log(text); // Always gets the latest text
  });

  return <div onClick={onClick}>Click me</div>;
}
```

## Demo

<EventDemo />
