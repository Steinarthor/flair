const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [path.resolve(__dirname, 'src', 'index.tsx')],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s(x)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-hot-loader/babel'],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Flair',
            template: './src/index.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
    },
}
