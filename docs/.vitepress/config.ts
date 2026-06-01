import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DEMO Technical Validation',
  description: 'End-to-end validation notes for the DEMO project.',
  base: '/demo-project-development/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Validation', link: '/validation' },
      { text: 'Deployment', link: '/deployment' },
    ],
    sidebar: [
      { text: 'Overview', link: '/' },
      { text: 'Validation', link: '/validation' },
      { text: 'Deployment', link: '/deployment' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/thiswind/demo-project-development' },
    ],
  },
})
