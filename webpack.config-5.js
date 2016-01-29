// Bundle JS + sourcemap + Babel + CSS + files + data URLs

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
                loader: 'url-loader',
                query: {
                    name: 'build/images/[name].[ext]',
                    limit: 5000,
                },
            },
        ],
    },
    resolve: {
        root: ['node_modules'],
        extensions: ['', '.js'],
    },
};
