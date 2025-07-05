import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import json5Plugin from 'vite-plugin-json5'

export default defineConfig({
	plugins: [json5Plugin(), sveltekit()]
});
