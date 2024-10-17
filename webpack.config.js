const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './main.js',
    output: {
        filename: 'bundle.min.js', // Output filename
        path: __dirname + '/dist', // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-arrow-functions']
                    }
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    mode: 'production', // Set mode to production for minification
};
