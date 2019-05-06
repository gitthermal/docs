module.exports = {
	title: 'Thermal',
	description: 'One stop. Git repository',
	dest: "public",
	head: [
		['link', { rel: 'icon', href: '/images/favicon.png' }],
		['meta', { name: 'keywords', content: 'thermal, thermal app, git thermal, thermal gui, thermal git, git gui' }],
		['meta', { name: 'author', content: 'CodeCarrot' }],
		['meta', { itemprop: 'image', content: '/images/meta_image.png' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { itemprop: 'og:image', content: '/images/meta_image.png' }],
		['meta', { property: 'og:site_name', content: 'Thermal' }],
		['meta', { property: 'og:description', content: 'One stop. Git repository' }],
		['meta', { property: 'twitter:description', content: 'One stop. Git repository' }],
		['meta', { property: 'twitter:image', content: '/images/meta_image.png' }],
		['meta', { property: 'twitter:url', content: 'https://thermal.netlify.com/' }],
		['meta', { property: 'twitter:site', content: '@gitthermal' }],
		['meta', { name: 'robots', content: 'index, follow' }]
	],
	ga: "UA-131193769-3",
	themeConfig: {
		logo: '/images/logo.png',
		nav: [
			{ text: 'Home', link: '/' },
			{
				text: 'Guide',
				items: [
					{ text: 'Windows', link: '/win/guide/' }
				]
			},
			{
				text: 'Misc',
				items: [
					{ text: 'Support', link: 'https://discord.gg/KT3nAR5' },
					{ text: 'Changelog', link: 'https://www.notion.so/gitthermal/Release-notes-7d77751a39484413b7ca8564b3f390a9' }
				]
			},
			{ text: 'Patron', link: 'https://www.patreon.com/join/mittalyashu?' }
		],
		sidebar: {
			'/win/guide/': [
				['/download/', 'Download'],
				['', 'Introduction'],
				['repository', 'Repository'],
				['experimental-features', 'Experimental features']
			]
		},
		repo: 'gitthermal/thermal',
		docsRepo: 'gitthermal/docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
		lastUpdated: 'Last Updated',
		serviceWorker: {
			updatePopup: true
		}
	},
	serviceWorker: true
}
