let prompt = require('prompt-sync')();

var entrada = prompt('Digite o texto a ser invertido: ');

function reverseString(str) {
  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i]; 
  }
  console.log(newString)
  return newString; 
}

reverseString(entrada);