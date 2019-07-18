//CLASE Funciones
// var nombre = 'Sacha', edad = 28

// function imprimirEdad(n,e){
//     console.log(`${n} tiene ${e} años`)
// }

// imprimirEdad(nombre,edad)
// imprimirEdad('Vick', 28)
// imprimirEdad('Eric', 24)
// imprimirEdad('Dario', 27)
// imprimirEdad(28,'Vick' )
// imprimirEdad('Juan')

//CLASE Alcance funciones 
// var nombre = 'Beto'

// function imprimirNombreMayusculas(nombre){
//     window.nombre
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }

// imprimirNombreMayusculas(nombre)

//CLASE Objetos
var beto = {
    nombre: 'Beto',
    apellido: 'González',
    edad: 29
}

var dario = {
    nombre: 'Dario',
    apellido: 'Franco',
    edad: 27
}

function imprimirNombreMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(beto)
imprimirNombreMayusculas(dario)
// imprimirNombreMayusculas({nombre: 'Pepito'})
// imprimirNombreMayusculas({apellido: 'Pepito'})

//Clase destructurar objeto

var beto = {
    nombre: 'Beto',
    apellido: 'González',
    edad: 29,
    ingeniero: false,
    cocinero: false,
    dj: false,
    cantante: true,
    guitarrista: false,
    drone: false,
    peso: 89
}

var dario = {
    nombre: 'Dario',
    apellido: 'Franco',
    edad: 27
}

function imprimirDatos(persona) {
    var { nombre } = persona
    var { edad } = persona
    console.log(`¡Hola!, me llamo: ${nombre} y tengo ${edad}`)
}

imprimirDatos(beto)
imprimirDatos(dario)

//Clase parametros referencia o valor
function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

//Clase comparaciones
var x = 4, y = '4'
var dario = beto

var desconocido = {
    ...beto
}

//Clase condicionales
function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero == true)
        console.log('Ingeniero')

    else
        console.log('No es ingeniero')

    if (persona.cocinero)
        console.log('Cocinero')

    if (persona.dj)
        console.log('DJ')

    if (persona.cantante)
        console.log('cantante')

    if (persona.guitarrista)
        console.log('Guitarrista')

    if (persona.drone)
        console.log('Piloto de drone')
}

const MAYORIA_DE_EDAD = 18

function validarMayorEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMayorEdad(persona) {

    if (validarMayorEdadArrow(persona))
        console.log(`${persona.nombre} es mayor de edad`)
    else
        console.log(`${persona.nombre} es menor de edad`)

}

//CLASE Arroy Functions
// const validarMayorEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const validarMayorEdad =  (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const validarMayorEdad =  persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const validarMayorEdadArrow = persona => persona.edad >= MAYORIA_DE_EDAD

const validarMayorEdadArrow = ({ edad }) => edad >= MAYORIA_DE_EDAD

const validarMenorEdadArrow = ({ edad }) => edad < MAYORIA_DE_EDAD

function permitirAcceso(persona) {
    if (!validarMayorEdadArrow(persona.edad))
        console.log('ACCESO DENEGADO')
}

//CLASE Esctructuras repetitivas: FOR
console.log(`Al inicio del año ${beto.nombre} pesa ${beto.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
const disminuirPeso = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if (random < 0.25)
        aumentarPeso(beto)

    else if (random < 0.5)
        disminuirPeso(beto)

}

console.log(`Al final del año ${beto.nombre} pesa ${beto.peso.toFixed(1)} kg`)

//CLASE Estructuras repetitivas: while
const META = beto.peso - 3

const DECREMENTO_PESO = 0.3

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

var dias = 0

const vistaNutriologo = (persona) => {
    while (beto.peso > META) {
        //debugger
        if (comeMucho)
            aumentarPeso(beto)

        if (haceDeporte)
            disminuirPeso(beto)

        dias += 1
    }

    Console.log(`Pasaron ${dias} hasta que ${beto.nombre} bajó 3 kilos`)
}

//CLASE Estructuras repetivas: do-while
var contador = 0
var letrero = ''
const llueve = () => Math.random() < 0.25
do {
    contador++
} while (!llueve())

if (contador == 1)
    letrero = 'vez'

if (contador > 1)
    letrero = 'veces'

console.log(`Fui a ver si llovía ${contador} ${letrero}`)

//CLASE Condicional múltiple: switch
var signo = '' // = prompt('¿Cuál es tu signo?')
console.log(signo)

switch (signo) {
    case 'acuario':
        console.log('Cosas de acuario')
        break;
    case 'psicis':
        console.log('Cosas de pisis')
        break;
    case 'cancer':
        console.log('Cosas de cancer')
        break;
    default:
        console.log('Signo no válido')
        break;
}

//CLASE Introducción a arrays
var beto = {
    nombre: 'Alberto',
    apellido: 'González',
    altura: 1.83,
    cantidadDeLibros: 78
}

var mario = {
    nombre: 'Mario',
    apellido: 'Franco',
    altura: 1.80,
    cantidadDeLibros: 132
}

var oscar = {
    nombre: 'Oscar',
    apellido: 'Rodriguez',
    altura: 1.77,
    cantidadDeLibros: 90
}

var personas = [beto, mario, oscar]
const imprimirPersonas = (personas) => {
    for (var i = 0; i < personas.length; i++) {
        var persona = personas[i]
        console.log(`${persona.nombre} mide ${persona.altura}`)
    }
}
imprimirPersonas(personas)

const esAlta = (persona) => persona.altura > 1.80
const esAltaDesglozada = ({ altura }) => altura > 1.8

//CLASE filtrar un array
var personasAltas = personas.filter(esAlta)
var personasAltasDesglozadas = personas.filter(esAltaDesglozada)
// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.8
// })


imprimirPersonas(personasAltas)
imprimirPersonas(personasAltasDesglozadas)

//CLASE Transformar un array
const convertirAltura = persona => (
    //Así se devuevle una persona.
    {
        ...persona,
        altura: persona.altura * 100
    }
)

// {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }   
//     // persona.altura *= 100 Ésta funcion no se puede escribir así porque 
//     // se requiere que se regrese la persona. 
// }
//persona.altura = (100 * persona.altura)
var personasCM = personas.map(convertirAltura)

imprimirPersonas(personasCM)

//CLASE: Reducir un array a un valor
const reducir = (acumulador, { cantidadDeLibros }) => acumulador + cantidadDeLibros

var totalLibros = personas.reduce(reducir, 0)
console.log(totalLibros)

//CLASE Cómo funcionan las clases en JavaScript
const alturaPromedio = 1.80

// function heredaDe(prototipoHijo, prototipoPadre) {
//     var fn = function () { }
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }

function Persona(pNombre, pApellido, pAltura) {
    this.nombre = pNombre
    this.apellido = pApellido
    this.altura = pAltura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    var informacion = `Yo, ${this.nombre}, `

    if (this.altura > alturaPromedio)
        informacion += `soy alt@`
    else
        informacion += `no soy alt@`

    console.log(informacion)
}

var betoP = new Persona('Beto', 'Prototipo', 1.8)
betoP.soyAlto()
betoP.saludar()
/*IMPORTANTE
//En las arrow functions, la palabra 'this' hace referencia
//al objeto window.
*/

//CLASE: La verdad oculta sobre las clases en JavaScript
function Desarrollador(pNombre, pApellido) {
    this.nombre = pNombre
    this.apellido = pApellido
}

// heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Me llamo ${this.nombre} y son desarrollad@`)
}

var betoP = new Persona('Beto', 'Prototipo', 1.8)

//CLASE: Clases en JavaScript
class CPersona {
    constructor(pNombre, pApellido, pAltura) {

        this.nombre = pNombre
        this.apellido = pApellido
        this.altura = pAltura
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn)
            fn(this.nombre, this.apellido)
    }

    soyAlto() {
        var informacion = `Yo, ${this.nombre}, `

        if (this.altura > alturaPromedio)
            informacion += `soy alt@`
        else
            informacion += `no soy alt@`

        console.log(informacion)
    }
}

class CDesarrollador extends CPersona {
    constructor(pNombre, pApellido, pAltura) {
        super(pNombre, pApellido, pAltura)
    }

    saludar(fn) {
        // var { nombre, apellido } = this
        console.log(`Me llamo ${this.nombre} y son desarrollad@`)
        if (fn)
            fn(this.nombre, this.apellido, true)
    }
}

//CLASE: Funciones con parámetros
function responderSaludo(pNombre, pApellido, pDev) {
    console.log(`Buen día ${pNombre} ${pApellido}`)
    if (pDev)
        console.log(`Desconocía que eres desarrollador@`)
}

var betoC = new CPersona('Alberto', 'Clase', 1.83)
var marioD = new CDesarrollador('Mario', 'Desarrollador', 1.81)
betoC.saludar(responderSaludo)
marioD.saludar(responderSaludo)

//CLASE: Callbacks
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
// const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, soy ${persona.name}`)
}

//CLASE Haciendo múltiples request
function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)

//CLASE Manejando el orden y el asincronismo en JavaScript
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola, soy ${persona.name}`)

        if (callback) {
            callback()
        }
    })
}

// obtenerPersonaje(1, function () {
//     obtenerPersonaje(2, function () {
//         obtenerPersonaje(3)
//     })
// })

//CLASE Manejo de errores con callbacks
function obtenerPersonajeErrores(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Error, no se pudo obtener el personaje: ${id}`)
        })
}

// obtenerPersonajeErrores(1, function (personaje) {
//     console.log(`Hola desde error, soy ${personaje.name}`)

//     obtenerPersonajeErrores(2, function (personaje) {
//         console.log(`Hola desde error, soy ${personaje.name}`)

//         obtenerPersonajeErrores(3, function (personaje) {
//             console.log(`Hola desde error, soy ${personaje.name}`)
//         })
//     })
// })

//CLASE Promesas
function obtenerPersonajePromesas(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Ocurrió un error obteniendo personaje: ${id}`)
}

obtenerPersonajePromesas(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es: ${personaje.name}`)
    })
    .catch(onError)

//CLASE Promesas encadenadas
function ObtenerPromesasEncadenadas() {
    console.log(`\nLlamadas a promesas encadenadas.`)
    obtenerPersonajePromesas(1)
        .then(personaje1 => {
            console.log(`El personaje 1 es: ${personaje1.name}`)
            return obtenerPersonajePromesas(2)
        })
        .then(personaje2 => {
            console.log(`El personaje 2 es: ${personaje2.name}`)
            return obtenerPersonajePromesas(3)
        })
        .then(personaje3 => {
            console.log(`El personaje 3 es: ${personaje3.name}`)
            return obtenerPersonajePromesas(4)
        })
        .then(personaje4 => {
            console.log(`El personaje 4 es: ${personaje4.name}`)
            return obtenerPersonajePromesas(5)
        })
        .then(personaje5 => {
            console.log(`El personaje 5 es: ${personaje5.name}`)
            return obtenerPersonajePromesas(6)
        })
        .then(personaje6 => {
            console.log(`El personaje 6 es: ${personaje6.name}`)
            return obtenerPersonajePromesas(7)
        })
        .then(personaje7 => {
            console.log(`El personaje 7 es: ${personaje7.name}`)
        })
        .catch(onError)
}

// ObtenerPromesasEncadenadas()

//CLASE Múltiples promesas en paralelo
//FORMA 1:
// var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function (id) {
//     return obtenerPersonajePromesas(id)
// })

//FORMA 2:
var promesas
function promesasEnParalelo() {

    console.log(`Promesas en paralelo`)
    var ids = [1, 2, 3, 4, 5, 6, 7]
    promesas = ids.map(id => obtenerPersonajePromesas(id))
    Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)
}

// promesasEnParalelo()

//CLASE: Async-await: lo último en asincronismo

async function obtenerPersonajes() {
    console.log(`Obtener personajes Async-await`)
    var ids = [1, 2, 3, 4, 5, 6, 7]
    promesas = ids.map(id => obtenerPersonajePromesas(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }
    catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

//¿Qué pasa si se desea crear una cadena con caracteres en mayúscula, pero la cadena es una cadena vacía.
