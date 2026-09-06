// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cipherprime.com',
	server: {
		host: true,
	},
	redirects: {
		'/games': '/',
		'/games/pulse/buy': '/games/pulse',
		'/games/fractal/buy': '/games/fractal',
		'/games/intake/buy': '/games/intake',
		'/games/splice/buy': '/games/splice',
		'/games/auditorium/buy': '/games/auditorium',
	},
	integrations: [sitemap()],
});
