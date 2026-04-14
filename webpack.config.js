const path = require('path')
//importuje biblioteke [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js', // definiuje plik wejsciowy
    output: {
        path: path.resolve(__dirname, 'build'), //definiuje sciezke wyjsciowa
        filename: 'app.min.js', //defniuje nazwe pliku wyjsciowego
    },
    module: {
        rules: [
            {
                test: /\.js$/, //określam jakie pliki będą brane pod uwage
                exclude: /node_modules/, //określam wykluczenia
                use: 'babel-loader', //określam jaki loader ma byc wykorzystany
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
} //eksportuje ustawienia dla webpacka