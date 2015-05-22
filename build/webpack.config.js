/**
 * Created by jotalora on 15-05-21.
 */
module.exports = {
    entry: '../content/javascript/src/index.jsx',
    output: {
        path: './',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: '../content/javascript/node_modules/jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },

    //externals: {
    //    'react': 'React'
    //},

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};