# usePhysics

Physics effect hook (WIP).

## Usage

```tsx
import { usePhysics } from '@vaclock/utils';

const [ref] = usePhysics({
  type: 'spring',
  config: { tension: 170, friction: 26 },
  onUpdate: (value) => {
    console.log(value);
  }
});
```

## Demo

<PhysicsDemo />
