import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233399);   
const cliente2 = new Cliente("Alice", 88822233399);
const contaCorreteRicardo = new ContaCorrente(1001,cliente1);
contaCorreteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;                        
contaCorreteRicardo.transferir(valor, conta2)

console.log(ContaCorrente.numeroDeContas)//imprimindo numero de contas