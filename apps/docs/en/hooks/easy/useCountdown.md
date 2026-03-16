# useCountdown

Countdown Hook.

## Usage

```tsx
import { useCountdown } from '@vaclock/utils';

const [time, format] = useCountdown({
  target: Date.now() + 86400 * 1000,
  interval: 1000,
});
```

## Demo

<CountdownDemo />
