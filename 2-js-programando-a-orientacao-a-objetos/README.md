# Introdução ao Javascript - Programando a Orientação a Objetos

**Introdução**

 - O objetivo é criarmos um sistema de conta corrente e cadastro de clientes para o contratante Bytebank. Aonde seja possível manipular o saldo e realizar operações bancárias.

 - Vamos conhecer diversos conceitos novos, como a palavra _new_, entidade _Cliente_(que vamos criar) e a criação de métodos como: _sacar()_ e _depositar()_, que estão em português e que não são da linguagem e assim por diante.

 - Um dos principais conceitos de orientação a objetos que será abordado é o uso de classes.Atributos estáticos, privados e uma nova proposição para atributos privados da linguagem, com cerquilha _(#)_ precedendo o atributo ao invés da convenção atual _underline(_)_.

 - Veremos também o uso de get e set assessores, como construtores, para facilitar o fluxo de criação de classes e objetos.

 **Dica:** Caso tenha uma versão antiga version 13 do NODE, para que possa alterar entre versões de forma mais simples acesse o link: https://github.com/nvm-sh/nvm.
    - Caso esteja usando um sistema Windows vocês podem usar o gerenciador de pacotes Chocolatey(https://chocolatey.org/packages/nvm), que auxilia na instalação do NVM no Windows.

1. Repetição de código
    - como evitar repetição de código
    - criando nossa primeira classe utilizando a palavra chave _class_
    - criando propriedades, atributos que desejamos que a classe possua
    - instanciando classe com _new_

    **O que aprendemos**

    - Criando classes

    - O que são atributos

    - Instâcia/Objeto

    - Operador new

2. Adicionando comportamentos
    - comportamentos de classes
        - criando método sacar e adicionando comportamento na classe ContaCorrente
        - adicionando comportamento(método) de depósito e verificando se não entra valor negativo depositado
    - atributos privados(utilizando a proposta #) proposta que está sendo feita para uma sintaxe de campos privados dentro do JS. link: https://github.com/tc39/proposal-class-fields#private-fields.
        - utilizando a proposta de #, para que o saldo não seja alterado fora da classe
        - atributos privados (_) utilizando _ na frente do atributo, conforme a convenção para torná-lo privado
    - métodos com retorno

    **O que aprendemos:**

    - Criação de métodos
    
    - Palavra chave this
    
    - Encapsulamento
    
    - Proposta de atributos privados
    
    - return e early return

3. Modularizando código
    - modulos JavaScript
        - instalando package.json(comando: npm init) e adicionando "type": "module", para que o node reconheça os modulos
    - composição de classes
        - criando associações entre as classes Cliente e ContaCorrente 
    - tipo de valor e tipo de referência
        - em Javascript os tipos primitivos são:
            -String (texto)
            -Number (número)
            -Boolean
            -Null
            -undefined
            -Symbol

    **O que aprendemos**   

    - Package.json

    - Modules

    - import/export

    - Quais as vantagens de ter um código onde usamos classes e composição ao invés de tipos primitivos

    - Tipos de valor e tipos de referência

    - Alterando dinamicamente um objeto

**Dicas:**Informações sobre scripts npm na Documentação npm link: https://docs.npmjs.com/misc/scripts

- Especificações do tratamento de package.json do npm 
    - npm-package.json link para documentação: https://docs.npmjs.com/files/package.json

 - Tipos primitivos, link: https://developer.mozilla.org/pt-BR/docs/Glossario/Primitivo

 -Modelo de gerenciamento de memória do JS, link: https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239   

 4. Acessando Atributos Privados
    - Null e underfined
    - Getters e Setters 
    - instanceof, link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
    - Encapsulamento com assessores
    
    **O que aprendemos**
    
    - Diferenças entre null e undefined

    - Aprofundando nos conceitos de referências a um espaço de memória

    - Get e Set 

    - Melhor encapsulamento da classe

    - Protegendo atributos sensíveis

5. Construtores estáticos
    - construtores
    - atributos estáticos
        - deixando um atributo estático inerente à classe como um todo

    **O que aprendemos:**

    - Construtores

    - encapsulamento

    - atributos "readonly"

    - Atributos estáticos    

    <img src="../assets/Certificado Sindi - Alura Javascript primeiros passos.jpg"/>
  