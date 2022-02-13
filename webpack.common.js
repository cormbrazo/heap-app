const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react'],
						},
					},
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					sources: {
						list: [
							{
								tag: 'img',
								attribute: 'src',
								type: 'src',
							},
							{
								tag: 'link',
								attribute: 'href',
								type: 'src',
							},
						],
					},
				},
			},
			{
				test: /\.(svg|png|jpg|gif|jpeg|ico|webmanifest)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[contenthash].[ext]',
							outputPath: 'assets',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			Actions: path.resolve(__dirname, 'src/js/actions'),
			Atoms: path.resolve(__dirname, 'src/js/components/atoms'),
			Contextual: path.resolve(__dirname, 'src/assets/images/contextual'),
			CSS: path.resolve(__dirname, 'src/css'),
			Favicons: path.resolve(__dirname, 'src/assets/images/favicons'),
			Less: path.resolve(__dirname, 'src/less'),
			Logos: path.resolve(__dirname, 'src/assets/images/logos'),
			Molecules: path.resolve(__dirname, 'src/js/components/molecules'),
			Node: path.resolve(__dirname, 'node_modules'),
			Organisms: path.resolve(__dirname, 'src/js/components/organisms'),
			Reducers: path.resolve(__dirname, 'src/js/reducers'),
			Root: path.resolve(__dirname, './'),
			Routes: path.resolve(__dirname, 'src/js/routes'),
			Variants: path.resolve(__dirname, 'src/js/variants'),
		},
	},
};
