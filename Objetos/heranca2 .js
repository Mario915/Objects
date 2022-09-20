// Cadeia de prototótipos (prototype chain)
Object.prototype.attr0 = '0' //Não fazer 
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
/*
Avo está para Object
Pai está para avo 
Filho esta para o pai
*/

/* O "__proto__" ele pega e visualiza linha por linha até 
encontrar o qu e lhe foi pedido */

/**************************************************************/
      /*******  Mais Complexo  *********/
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return`${this.modelo}: ${super.status()}`
        //'Super' é utilizado para chamar o metodo do meu protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
//A função "setPrototypeOf" é que estabelece um prototipo entre dois objetos

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())