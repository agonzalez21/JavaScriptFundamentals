//CLASE1
var name = 'Beto', apellido = 'González'

// var age = 28
// age = '28 años'

// console.log('Hola ' + name + ' ' + apellido)
// console.log('Tengo ' + age )

// var peso = 75

//CLASE2
var nameMayusculas = name.toUpperCase()
var apellidoMinus = apellido.toLowerCase()
var primeraLetra = name.charAt(0)
var cantidadLetrasNombre = name.length
var nombreCompleto = name + ' ' + apellido
nombreCompleto = `${name} ${apellido.toUpperCase()}`

var str = name.charAt(1) + name.charAt(2)
str = name.substr(1,2)