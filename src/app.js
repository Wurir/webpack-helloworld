import getCurrentDate from './getDate.js' // importowanie plikow przez przeglądarke wymaga podania rozszerzenia pliku np. (.js)
import Point from './Point.js'

const date = getCurrentDate()

console.log(date.getFullYear());

const p1 = new Point(1, 2)

console.log(p1);
