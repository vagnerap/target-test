console.log('=================================================================');
console.log('a) 1, 3, 5, 7, ___');
console.log('=================================================================');
let contadorA = -1
for (var i = 0; i < 5; i++) {
  contadorA = contadorA + 2
  console.log(contadorA)
}

console.log('=================================================================');
console.log('b) 2, 4, 8, 16, 32, 64, ____');
console.log('=================================================================');
let contadorB = 2
let multiplicadorB = contadorB
for (var i = 0; i < 6; i++) {
  contadorB = contadorB * multiplicadorB
  console.log(contadorB)
}

console.log('=================================================================');
console.log('c) 0, 1, 4, 9, 16, 25, 36, ____');
console.log('=================================================================');
let contadorC;
for (var i = 0; i < 10; i++) {
  contadorC = i * i;
  console.log(contadorC);
}

console.log('=================================================================');
console.log('d) 4, 16, 36, 64, ____');
console.log('=================================================================');
let contadorD;
for (var i = 0; i <= 2*5; i+=2) {
  contadorD = i * i;
  console.log(contadorD);
}

console.log('=================================================================');
console.log('e) 1, 1, 2, 3, 5, 8, ____');
console.log('=================================================================');
var contadorE = [];
contadorE[0] = 1;
contadorE[1] = 1;
for (var i = 2; i < 10; i++) {
  contadorE[i] = contadorE[i - 2] + contadorE[i - 1];
}
console.log(contadorE)

console.log('=================================================================');
console.log('f) 2,10, 12, 16, 17, 18, 19, 200(DUZENTOS)');
console.log('=================================================================');