// Bundle JS + sourcemap

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'build/main.js',
    },
    devtool: '#source-map',
};
