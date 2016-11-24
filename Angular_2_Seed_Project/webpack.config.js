var webpack = require('webpack');
var path    = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


// Webpack Config
var webpackConfig = {
    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor'   : './src/vendor.browser.ts',
        'main'     : './src/main.browser.ts'
    },

    output: {
        path: './dist'
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name     : ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
    ],

    module: {
        loaders: [
            {
                test   : /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }

};


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache  : true,
    debug  : true,
    output : {
        filename         : '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename    : '[id].chunk.js'
    },

    resolve: {
        root      : [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions      : {aggregateTimeout: 300, poll: 1000}
    },

    node: {
        global        : 1,
        crypto        : 'empty',
        module        : 0,
        Buffer        : 0,
        clearImmediate: 0,
        setImmediate  : 0
    }
};

var webpackMerge = require('webpack-merge');
module.exports   = webpackMerge(defaultConfig, webpackConfig);
