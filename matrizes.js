const prompt = require("prompt-sync")();

// matriz multidimensional:

let atividades = [
  ["trabalho", 8],
  ["diversão", 2],
  ["estudo", 3],
  ["descanso", 5],
];

console.table(atividades);

// Javascript não tem essa função nativa, mas adicionando arrays dentro de outro array, é possível criar uma matriz multidimensional, sendo separada igualmente é uma tabela.

// pode acessar, modificar e apagar elementos da matriz normalmente:

console.log(atividades[0][1]); // irá retornar 8 (ele entrará no array de posição 0 e acessará a posição 1)

atividades.push(["banho", 1]); // adiciona 'banho, 1' no final de atividades

console.table(atividades);

atividades.splice(2,0,["café", 1]); // adiciona 'café, 1' na posição 2 sem remover nenhum elemento

console.table(atividades);


atividades.forEach(calculo => { // para cada elemento do array, irá executar a função calculo
    let porcentagem = ((calculo[1] / 24) * 100).toFixed(2); // ele pega o valor da posição 1 daquele elemento, faz as contas e salva em porcentagem
    calculo[2] = porcentagem + "%"; // adiciona a porcentagem na posição 2 daquele elemento em questão!
})

console.table(atividades);