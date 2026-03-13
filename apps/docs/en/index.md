# React Utils

A collection of high-quality React Hooks and Utilities.

## Features

- 🚀 **Performance First**: Optimized for high performance
- 📦 **Tree Shakeable**: Only import what you need
- 💪 **TypeScript**: Written in TypeScript with full type definitions
- 🧪 **Well Tested**: Comprehensive test coverage

## Installation

```bash
pnpm add @react-utils/hooks
```

## Quick Start

```tsx
import { useCountdown } from '@react-utils/hooks';

function App() {
  const { count } = useCountdown(60);
  return <div>{count}</div>;
}
```
