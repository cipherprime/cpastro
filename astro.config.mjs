// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://cipherprime.com',
	server: {
		host: true,
	},
	redirects: {
		'/games': '/',
		'/games/pulse/buy': '/games/pulse',
		'/games/pulse/faq': '/games/pulse',
		'/games/pulse/behindthemusic': '/games/pulse',
		'/games/fractal/guide': '/games/fractal',
		'/games/fractal/buy': '/games/fractal',
		'/games/fractal/faq': '/games/fractal',
		'/games/intake/buy': '/games/intake',
		'/games/splice/buy': '/games/splice',
		'/games/auditorium/guide': '/games/auditorium',
		'/games/auditorium/buy': '/games/auditorium',
	},
});
