var webpack = require('webpack');
var path = require('path'); // core module; no need to install separately

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js', // load jquery before app.jsx
        'script!foundation-sites/dist/js/foundation.min.js', // load foundation before app.jsx
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            // use jquery for $ and jQuery
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
