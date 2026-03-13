# usePhysics

物理效果 Hook (WIP)。

## Usage

```tsx
import { usePhysics } from '@react-utils/hooks';

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
