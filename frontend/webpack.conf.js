const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
        path: __dirname + '/../server/web/static/inferno',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},

    resolve: {
        extensions: ['.js', '.ts'], // Añade '.ts' para soporte de TypeScript
    },

    module: {
        rules: [
            // Regla para JavaScript (con Babel)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Regla para TypeScript
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
	devServer: {
		port: 8080,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
