// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)
//É possivel modificar o valor da constante não a constante que foi criada

// pessoa -> 456 -> {...}
//pessoa = { nome: ' Ana' }
Object.freeze(pessoa)
/*
"Object.freeze" basicamente ele trava todo e qualquer objeto
não deixando que não seja alterado nem adicionado nenhum tipo de código
*/
pessoa.name = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)