const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');

// caching => we can use content hash to avoid caching by browsers
module.exports = merge(common, {
	mode: 'development', // adding this, the compiled file won't be minified by default
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist'),
	},
	devServer: {
		host: '0.0.0.0',
		port: 1013,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new CompressionPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/html/index.html',
		}),
		new Dotenv({
			path: './.env_local',
			safe: false,
			allowEmptyValues: true,
			silent: false,
		}),
	],
});
