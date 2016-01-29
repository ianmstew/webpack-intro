// JS files + sourcemap
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'build/main.js',
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.(?:jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: 'build/images/[name].[ext]',
                },
            },
        ],
    },
    resolve: {
        root: ['node_modules'],
        extensions: ['', '.js'],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        }),
    ],
};
