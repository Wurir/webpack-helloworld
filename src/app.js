import getCurrentDate from './getDate.js' // importowanie plikow przez przeglądarke wymaga podania rozszerzenia pliku np. (.js)
import Point from './Point.js'
import { calcSum as getSum } from './math.js';

const date = getCurrentDate()

console.log(date.getFullYear());

const p1 = new Point(1, 2)

console.log(p1);

const sum = getSum(1, 2, 3, 4, 5)
console.log(sum);
