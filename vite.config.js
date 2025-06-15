import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
	if (command === 'serve') {
		return {
			root: 'demo',
			plugins: [react()],
			scss: {
				api: 'modern-compiler',
			},
		};
	} else {
		return {
			scss: {
				api: 'modern-compiler',
			},
			plugins: [react()],
			build: {
				lib: {
					entry: resolve(__dirname, 'src/index.jsx'),
					name: 'ReactListEditable',
					fileName: (format) => `react-list-editable.${format}.js`,
					formats: ['es', 'umd'],
				},
				rollupOptions: {
					external: ['react', 'react-dom', 'prop-types'],
					output: {
						globals: {
							react: 'React',
							'react-dom': 'ReactDOM',
							'prop-types': 'PropTypes',
							'react/jsx-runtime': 'ReactJsxRuntime',
						},
					},
				},
			},
		};
	}
});
