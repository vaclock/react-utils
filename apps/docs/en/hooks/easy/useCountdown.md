# useCountdown

Countdown Hook.

## Usage

```tsx
import { useCountdown } from '@react-utils/hooks';

const [time, format] = useCountdown({
  target: Date.now() + 60000,
  interval: 1000,
});
```

## Demo

<CountdownDemo />
