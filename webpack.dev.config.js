const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
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
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
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
			favicon: 'src/assets/images/favicons/favicon.ico',
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
