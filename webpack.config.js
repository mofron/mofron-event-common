module.exports = {
    entry: __dirname + '/src/common.js',
    output: {
        path: __dirname + '/dist',
        filename: 'common.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
