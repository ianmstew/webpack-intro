// Bundle JS + sourcemap + Babel + CSS

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
        ],
    },
    resolve: {
        root: ['node_modules'],
        extensions: ['', '.js'],
    },
};
