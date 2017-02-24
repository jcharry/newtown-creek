const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const envFile = require('node-env-file');
// const precss = require('precss');
const autoprefixer = require('autoprefixer');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);
process.env.PWD = process.cwd();
try {
    envFile(path.join(process.env.PWD, `config/${process.env.NODE_ENV}.env`));
} catch (e) {
    console.log(e);
}

const configurePlugins = () => {
    // All dev plugins go here
    const dev = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ];

    // Shared plugins (i.e. both dev and prod) go here
    const shared = [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/index.html')
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'app/assets'), to: path.resolve(__dirname, 'dist/assets') }
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        })
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // })
    ];

    // Production plugins here
    const prod = [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
        // new webpack.optimize.OccurenceOrderPlugin()
    ];

    // Pick which plugins to return
    return process.env.NODE_ENV === 'production' ? shared.concat(prod) : shared.concat(dev);
};

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    entry: process.env.NODE_ENV === 'production' ?
    [
        // 'script-loader!jquery/dist/jquery.min.js',
        // 'script-loader!foundation-sites/dist/js/foundation.min.js',
        path.resolve(__dirname, 'app/app.jsx')
    ] :
    [
        // 'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',

        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/dev-server',
        // 'script-loader!jquery/dist/jquery.min.js',
        // 'script-loader!foundation-sites/dist/js/foundation.min.js',
        path.resolve(__dirname, 'app/app.jsx')
    ],
    node: {
        fs: 'empty'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
        // publicPath: path.resolve(__dirname, 'dist/')
    },
    context: path.resolve(__dirname, 'app'),
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, './app')
        ],
        alias: {
            components: path.resolve(__dirname, 'app/components'),
            app: path.resolve(__dirname, 'app'),
            assets: path.resolve(__dirname, 'app/assets')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.js?$/,
            //     exclude: /(node_modules|bower_components)/,
            //     loader: 'eslint-loader'
            // },
            // {
            //     test: /\.jsx?$/,
            //     exclude: /(node_modules|bower_components)/,
            //     loader: 'eslint-loader'
            // },
            {
                test: /\.scss/,
                loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {

                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: configurePlugins(),
    devServer: process.env.NODE_ENV === 'production' ? null : {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/',
        // match the output `publicPath`
        historyApiFallback: true,
        // handle routes gracefully

        // Proxy server
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3000'
        }]
    }
    // devServer: process.env.NODE_ENV === 'production' ? null : {
    //     contentBase: './dist',
    //     hot: true,
    //     historyApiFallback: true
    // }
};

