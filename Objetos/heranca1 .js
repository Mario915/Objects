const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__prot__)
console.log(ferrari.__prot__=== Object.prototype)
console.log(volvo.__prot__=== Object.prototype)
console.log(Object.prototype.__prot__===null)

function MeuObjeto(){}
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
