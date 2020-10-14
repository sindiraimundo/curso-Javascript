// Exemplo de uma lista de agência de viajem

console.log(`Trabalhando com listas`);

// declarando destinos

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log("Destino possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
//para não ficar tão trabalhoso declarar cada destino temos uma estrutura de armazenamento que chamamos de ARRAY(armazena lista de dados em comum);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//colocando um novo item na minha lista(adiciona novo item no final da minha lista)
listaDeDestinos.push(`Curitiba`)

console.log("Destino possíveis:");
console.log(listaDeDestinos);

//removendo item da lista
listaDeDestinos.splice(1,1)//passar a posição que desejo iniciar para remover e quantos itens quero remover(1 que representa índice do array São Paulo e (1) porque é só ele que quero remover);
console.log("Destino possíveis:");
console.log(listaDeDestinos);

//mostrar um único item da minha lista
console.log(listaDeDestinos[1], listaDeDestinos[0])//colocar [indice a ser exibido]resultado = São Paulo, Salvador