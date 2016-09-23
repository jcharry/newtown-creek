module.exports = {
    loaders: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        },
        {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'eslint-loader'
        },
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'eslint-loader'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!postcss-loader!sass'
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
};
