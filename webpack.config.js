const path = require('path')
//importuje biblioteke [path] z [node.js]

module.exports = {
    entry: './src/app.js', // definiuje plik wejsciowy
    output: {
        path: path.resolve(__dirname, 'build'), //definiuje sciezke wyjsciowa
        filename: 'app.min.js', //defniuje nazwe pliku wyjsciowego
    },
    module: {
        rules: [] //obecnie brak dodatkowych ustawien
    }
} //eksportuje ustawienia dla webpacka