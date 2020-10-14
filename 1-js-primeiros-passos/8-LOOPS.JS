// Exemplo de uma lista de agência de viajem

console.log(`\n Trabalhando com LOOPS`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;// quero pode alterar o valor de acordo com a condição passou então de cosnt para let
const destino = "Curitiba";

console.log("\n Destino possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18 || estaAcompanhada == true) {
//     console.log("Boa viagem!!");
//     listaDeDestinos.splice(1, 1)//removendo da lista
//     temPassagemComprada = true;//alterando o valor da variável de acordo com o fluxo de desenvolvimento.
// } else {
//     console.log("Não é maior de idade e não posso vender");
//     temPassagemComprada = false;
// }

// // REALIZANDO CONDIÇÃO DE EMBARQUE
// console.log("Embarque: \n\n")
// if (idadeComprador >= 18 && temPassagemComprada) {
//     console.log("Boa viagem");
// } else {
//     console.log("Você não pode embarcar");
// }

// ARMAZENANDO OPERAÇÃO EM UMA VARIÁVEL podeComprar
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//VERIFICANDO DESTINO
let contador = 0;//ponto de início para percorrer minha lista.
let destinoExiste = false;

while (contador < 3) {//enquanto(while) meu contador for menor que 3 executa:
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}
//FOR   //contador; condição; incremento
for (let cont = 0; contador < 3; cont++) {//enquanto(while) meu contador for menor que 3 executa:
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }

}