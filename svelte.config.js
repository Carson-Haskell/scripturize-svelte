import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs16.x'
		})
	},
	preprocess: vitePreprocess()
};
export default config;
