import { defineComponent, onMounted, onUnmounted, ref, h } from 'vue';
import { createRoot, type Root } from 'react-dom/client';
import React from 'react';

export function createReactWrapper(ReactComponent: React.ComponentType, props: Record<string, any> = {}) {
  return defineComponent({
    setup() {
      const rootRef = ref<HTMLElement | null>(null);
      let root: Root | null = null;

      onMounted(() => {
        if (rootRef.value) {
          root = createRoot(rootRef.value);
          root.render(React.createElement(ReactComponent, props));
        }
      });

      onUnmounted(() => {
        if (root) {
          root.unmount();
        }
      });

      return () => h('div', { ref: rootRef });
    }
  });
}
