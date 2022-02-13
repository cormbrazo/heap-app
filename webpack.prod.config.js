const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSS = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'index.[contenthash].js',
		chunkFilename: '[name].[contenthash].pkg.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		minimizer: ['...', new OptimizeCSS()],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CompressionPlugin(),
		new HtmlWebpackPlugin({
			favicon: 'src/assets/images/favicons/favicon.ico',
			filename: 'index.html',
			template: 'src/html/index.html',
			minify: {
				removeAttributeQuotes: true,
				removeComments: true,
				removeTagWhitespace: true,
				collapseWhitespace: true,
			},
		}),
		new MiniCssExtractPlugin({ filename: 'index.[contenthash].css' }),
		new Dotenv({
			path: './.env',
			safe: false,
			allowEmptyValues: true,
			silent: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
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
});
