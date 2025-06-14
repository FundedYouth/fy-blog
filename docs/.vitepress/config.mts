import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "FundedYouth Blog",
  description: "Tutorials and more",
  themeConfig: {
    siteTitle: 'The STEAM Engine',
    logo: 'images/steam-press-green-fade.svg',
    nav: [
      { text: 'Latest', link: '/' },
      { text: 'Categories', link: '/' },
      { text: 'Tags', link: '/' },
      { text: 'Archive', link: '/' }
    ],

    sidebar: [
      {
        text: 'Coding',
        items: [
          {text: 'Web API Basics', link: '/api-basics'}
        ]
      }
    ],

  }
})
