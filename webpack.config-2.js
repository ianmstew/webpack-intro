// Bundle JS + sourcemap + Babel

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
        ],
    },
    resolve: {
        root: ['node_modules'],
        extensions: ['', '.js'],
    },
};
