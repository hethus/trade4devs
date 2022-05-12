let a = 'a';
let b = 'b';
let c = 'c';

[a, b, c] = [b, c, a];

const array = [1, 2, 3];

[a, b, c] = array;

//----------

const num = [1,2,3,4,5,6,7,8,9,10];

const [um, dois, ...resto] = num; // rest operator

console.log(resto);

const [faltaUm, , faltaTres, , faltaCinco] = num;

console.log(faltaUm, faltaTres, faltaCinco);

//----------

const arrayArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [estruturaUm, estruturaDois, estruturaTres] = arrayArray;

console.log(estruturaUm, estruturaDois, estruturaTres[2]); // reestructuração de array

//----------

const spread = [...arrayArray]; // spread operator, cria um novo array so colocando os elementos do array original

console.log(spread);