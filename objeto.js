const obj = {
    nome: 'Pedro',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const { nome: oi, endereco: {cidade: cid, estado}, endereco, ...resto} = obj;

console.log(oi, cid, estado, endereco, resto);

const teste = {...obj}

console.log(teste);
