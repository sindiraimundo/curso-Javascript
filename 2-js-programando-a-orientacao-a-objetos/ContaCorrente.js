import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;

    //#saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;


    set cliente(novoValor){//acessor de atribuição
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){//acessor para acessar a propriedade privada
        return this._cliente
    }


    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
    }
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;            
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }

}