const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, options) => {
    const conf = {
        entry: {
            main: path.resolve(__dirname, './src/index.js'),
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
                // JavaScript
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                    //other rules
                // CSS, PostCSS, Sass
                {
                    test: /\.(scss|css)$/,
                    use: [
                        'style-loader', 
                        'css-loader',  
                        'sass-loader'],
                },

            ],
        },    
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack Boilerplate',
                template: path.resolve(__dirname, './src/template.html'), // шаблон
                filename: 'index.html', // название выходного файла
            }),
        ],
        devServer: {
            historyApiFallback: true,
            open: true,
            compress: true,
            hot: true,
            port: 8080,
        },

    };

    return conf;
};
