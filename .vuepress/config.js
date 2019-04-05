module.exports = {
  title: 'Thermal',
  description: 'One stop. Git repository',
  dest: "dist",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  ga: "UA-131193769-3",
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Misc',
        items: [
          { text: 'Support', link: 'https://discord.gg/KT3nAR5' },
          { text: 'Changelog', link: 'https://www.notion.so/gitthermal/Release-notes-7d77751a39484413b7ca8564b3f390a9' }
        ]
      },
      { text: 'Patron', link: 'https://www.patreon.com/join/mittalyashu?' }
    ],
    lastUpdated: 'Last Updated'
  },
  serviceWorker: true
}