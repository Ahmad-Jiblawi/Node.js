const importedFunction = require('./andrejs-awesome-function');

numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(element => {
  console.log(importedFunction.padLeft(element, 4, ' ') + ';')
});