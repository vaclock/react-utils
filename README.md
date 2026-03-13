# React Utils Monorepo

[![CI](https://github.com/eastbuy/react-utils/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/eastbuy/react-utils/actions/workflows/deploy-docs.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![VitePress](https://img.shields.io/badge/VitePress-1.0-646cff.svg)](https://vitepress.dev/)

A high-quality collection of React Hooks and Utilities, managed as a monorepo.

## 🌟 Features

- 🚀 **Production Ready**: Fully typed, tree-shakable, and optimized for modern bundlers.
- 📦 **Monorepo Structure**: Managed with [Turbo](https://turbo.build/) and [pnpm workspaces](https://pnpm.io/workspaces).
- 📚 **Interactive Docs**: Built with [VitePress](https://vitepress.dev/) and live React demos.
- 🛡 **Type Safe**: Written in TypeScript with strict mode enabled.
- ✅ **Tested**: Comprehensive test coverage (coming soon).

## 📦 Packages

| Package | Version | Description |
| --- | --- | --- |
| [`@react-utils/hooks`](./packages/hooks) | [![npm](https://img.shields.io/npm/v/@react-utils/hooks.svg)](https://www.npmjs.com/package/@react-utils/hooks) | Collection of essential React Hooks |
| [`apps/docs`](./apps/docs) | - | Documentation website |

## 🚀 Quick Start

### Installation

```bash
# Install the hooks package
npm install @react-utils/hooks
# or
yarn add @react-utils/hooks
# or
pnpm add @react-utils/hooks
```

### Usage Example

```tsx
import { useCountdown } from '@react-utils/hooks';

function App() {
  const [time, format] = useCountdown({
    target: Date.now() + 60000, // 1 minute from now
    interval: 1000,
  });
  
  const { minutes, seconds } = format(time);

  return (
    <div>
      Time remaining: {minutes}m {seconds}s
    </div>
  );
}
```

## 🛠 Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/eastbuy/react-utils.git
cd react-utils
pnpm install
```

### Common Commands

- **Build all packages**:
  ```bash
  pnpm build
  ```

- **Run documentation locally**:
  ```bash
  pnpm --filter docs run docs:dev
  ```

- **Lint code**:
  ```bash
  pnpm lint
  ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
