const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true,
        port: 5000,
        historyApiFallback: true,
        watchContentBase: true,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
})
