// Exemplo de uma lista de agência de viajem

console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destino possíveis:");
console.log(listaDeDestinos);

//se(maiorDeIdade){
//removendo item da lista
//listaDeDestinos.splice(1,1) //removendo da lista se for menor de idade;
//}

//VERIFICANDO SE O COMPRADOR É MAIOR DE IDADE E SE ESTÁ ACOMPANHADO

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1)//removendo da lista
// } else if (estaAcompanhada) {
//     //A pessoa é menor de idade
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1)//removendo da lista
// } else {

//     console.log("Não é maior de idade e não posso vender")
// }

//EVITANDO CÓDIGO DUPLICADO

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1, 1)//removendo da lista
} else {
    console.log("Não é maior de idade e não posso vender");
}
// REALIZANDO CONDIÇÃO DE EMBARQUE
console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log("TIPOS DE OPERADORES LÓGICOS")
// console.log(idadeComprador < 18);//MENOR QUE 18
// console.log(idadeComprador > 18);//MAIOR QUE 18
// console.log(idadeComprador <= 18);//MENOR IGUAL QUE 18
// console.log(idadeComprador >= 18);//MAIOR IGUAL QUE 18
// console.log(idadeComprador == 18);//IGUALDADE IGUAL TIPO E VALOR exatamente igual 18.