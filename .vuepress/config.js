module.exports = {
  title: 'Thermal',
  description: 'One stop. Git repository',
  dest: "dist",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  // ga: "",
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Patron', link: 'https://www.patreon.com/join/mittalyashu?' },
    ],
    lastUpdated: 'Last Updated'
  },
  serviceWorker: true
}