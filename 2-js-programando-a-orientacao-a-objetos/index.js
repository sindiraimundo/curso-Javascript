class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }

}


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233399;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233399;


const contaCorreteRicardo = new ContaCorrente();
contaCorreteRicardo.saldo = 0;
contaCorreteRicardo.agencia = 1001;


console.log("saldo", contaCorreteRicardo.saldo);
contaCorreteRicardo.depositar(100);
contaCorreteRicardo.depositar(200);
contaCorreteRicardo.depositar(-1);
console.log("deposito", contaCorreteRicardo.saldo);
contaCorreteRicardo.sacar(50);


console.log("saldo atual após sacar: ", contaCorreteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
