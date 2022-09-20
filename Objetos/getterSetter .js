const sequencia = {
    _valor: 1, //convenção
    //Quando colocado o "_" não quer dizer que é privado 
    get valor() { return this._valor++},
    //Recebe um valor qualquer
    set valor(valor) {
        //é possivel colocar algum tipo de validação e só atribuir valor quando necessário
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

/*
O "getter" e o "setter" são basicamente para
criar algum tipo de validação.
*/