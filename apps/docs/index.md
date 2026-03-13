# React Utils

一系列高质量的 React Hooks 和工具函数。

## 特性

- 🚀 **性能优先**: 专为高性能设计
- 📦 **支持 Tree Shaking**: 按需引用，减小包体积
- 💪 **TypeScript**: 使用 TypeScript 编写，提供完整的类型定义
- 🧪 **测试完备**: 拥有完善的测试用例

## 安装

```bash
pnpm add @react-utils/hooks
```

## 快速开始

```tsx
import { useCountdown } from '@react-utils/hooks';

function App() {
  const { count } = useCountdown(60);
  return <div>{count}</div>;
}
```
