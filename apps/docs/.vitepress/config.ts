import { defineConfig } from 'vitepress'
import react from '@vitejs/plugin-react'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 部署到 GitHub Pages 时，base 需要设置为 '/<repo-name>/'
  base: '/react-utils/',
  title: "React Utils",
  description: "A collection of React Hooks and Utilities",
  vite: {
    plugins: [react()]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      title: 'React Utils',
      description: '高质量 React Hooks 和工具库',
      themeConfig: {
        nav: [
          { text: 'Hooks', link: '/hooks/easy/useCountdown' },
          { text: 'Utils (即将推出)', link: '#' }
        ],
        sidebar: {
          '/hooks/': [
            {
              text: 'Easy Hooks',
              items: [
                { text: 'useCountdown', link: '/hooks/easy/useCountdown' },
                { text: 'useEvent', link: '/hooks/easy/useEvent' }
              ]
            },
            {
              text: 'Medium Hooks',
              items: [
                { text: 'useAsyncQueue', link: '/hooks/medium/useAsyncQueue' },
                { text: 'useRequestFn', link: '/hooks/medium/useRequestFn' }
              ]
            },
            {
              text: 'Hard Hooks',
              items: [
                { text: 'usePhysics', link: '/hooks/hard/usePhysics' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'React Utils',
      description: 'A collection of React Hooks and Utilities',
      themeConfig: {
        nav: [
          { text: 'Hooks', link: '/en/hooks/easy/useCountdown' },
          { text: 'Utils (Coming Soon)', link: '#' }
        ],
        sidebar: {
          '/en/hooks/': [
            {
              text: 'Easy Hooks',
              items: [
                { text: 'useCountdown', link: '/en/hooks/easy/useCountdown' },
                { text: 'useEvent', link: '/en/hooks/easy/useEvent' }
              ]
            },
            {
              text: 'Medium Hooks',
              items: [
                { text: 'useAsyncQueue', link: '/en/hooks/medium/useAsyncQueue' },
                { text: 'useRequestFn', link: '/en/hooks/medium/useRequestFn' }
              ]
            },
            {
              text: 'Hard Hooks',
              items: [
                { text: 'usePhysics', link: '/en/hooks/hard/usePhysics' }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
