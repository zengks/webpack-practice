const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	mode: 'development',

	plugins: [new HtmlWebpackPlugin({ template: 'index.html', title: 'Webpack Practice Again' })],

	devServer: {
		static: './dist',
		port: '3000',
		hot: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
