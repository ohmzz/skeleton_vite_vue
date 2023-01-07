import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

export default defineConfig({
	plugins: [
		vue(),
		alias({
			entries: [
				{
					find: '@',
					replacement: resolve(projectRootDir, 'src')
				}
			]
		})
	],
	server: {
		host: '0.0.0.0',
		port: 9850,
		open: false,
		cors: true,
	},
	build: {
		outDir: 'dist',
	}
})