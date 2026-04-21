const calcSum = (...args) => {
    return args.reduce((acc, num) => acc + num, 0)
}
const getMax = (...args) => {
    return Math.max(...args)
}

module.exports = { calcSum, getMax} // mozna eksportowac wiele fn