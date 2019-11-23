const leftPad = require('left-pad')

numbers = [ "12", "846", "2", "1236",];

numbers.forEach(element => {
  console.log(leftPad(element, 8, ' ') + ';')
});