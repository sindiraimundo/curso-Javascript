import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); 
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233399;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233399;


const contaCorreteRicardo = new ContaCorrente();
contaCorreteRicardo.agencia = 1001;
contaCorreteRicardo.cliente = cliente1;
contaCorreteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;                        
contaCorreteRicardo.transferir(valor, conta2);

conta2.saldo = 30000
console.log(conta2.saldo);
