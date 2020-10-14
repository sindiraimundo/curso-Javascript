import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); 
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233399;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233399;


const contaCorreteRicardo = new ContaCorrente();
contaCorreteRicardo.agencia = 1001;

contaCorreteRicardo.depositar(-100);
contaCorreteRicardo.depositar(100);
contaCorreteRicardo.depositar(100);

const valorSacado = contaCorreteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorreteRicardo);