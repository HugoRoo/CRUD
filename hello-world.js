console.log('hola desde node.js')


let myName = "Hugo"
const HOST = "http://localhost:8000"

console.log(myName)
console.log(HOST)


// funciones 
function suma(a,b){
    console.log('suma: ', a+b)
    return a + b
}

const resta = (a,b) => {
    console.log('resta: ', a-b)
    return a - b
}

suma(10, 20)
resta(10, 20)

if (false){
    console.log('verdadero')
} else {
    console.log('esto es falso')
}
