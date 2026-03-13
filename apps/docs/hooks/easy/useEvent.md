# useEvent

创建一个持久化的事件回调函数，使用 `useRef` 保持函数引用，避免闭包陷阱。

## Usage

```tsx
import { useEvent } from '@vaclock/utils';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  
  const onClick = useEvent(() => {
    console.log(text); // 始终能获取到最新的 text
  });

  return <div onClick={onClick}>Click me</div>;
}
```

## Demo

<EventDemo />
