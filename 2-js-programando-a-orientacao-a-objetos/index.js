class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(this.#saldo);
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
contaCorreteRicardo.agencia = 1001;

contaCorreteRicardo.depositar(100);
contaCorreteRicardo.depositar(100);
contaCorreteRicardo.depositar(100);

contaCorreteRicardo.sacar(50);

console.log(contaCorreteRicardo);


