let prompt = require('prompt-sync')();

var entrada = parseInt(prompt('Digite o número desejado: '));

// Fibonacci
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

// Verifica se o número inserido pertence a sequencia de Fibonacci
if (fibonacci.indexOf(entrada > -1)) {
  console.log('Esta na sequencia')
} else {
  console.log('Não está')
}

console.log(fibonacci);