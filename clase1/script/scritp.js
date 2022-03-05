import { Suma } from "./suma.js"
import { Multiplicacion } from "./multiplicacion.js"
import { Division} from "./division.js"
import { Resta } from "./resta.js"

console .log (Suma (39,40))
console .log (Multiplicacion(5,4))
console .log (Division(6,2))
console .log (Resta(7,3))

let num1;
let num2;

let btnEj1 = document.getElementById('Ejercicio1');
let btnEj2 = document.querySelector('#Ejercicio2');
let btnEj3 = document.getElementById('Ejercicio3');
let btnEj4 = document.querySelector('#Ejercicio4');
let Resultado1 = document.getElementById('ResEJ1')


function LeerDatos (){
    num1 = Number(prompt('Ingrese Número 1'));
    num2 = Number(prompt('Ingrese Número 2'));
}

btnEj1.addEventListener('click', () => {
    LeerDatos()
    console.log(Suma(num1, num2))
    console.log(`La suma es ${Suma(num1, num2)}`)
    Resultado1.innerHTML = `La suma es ${Suma(num1, num2)}`
})

btnEj2.addEventListener('click', () => {
    LeerDatos()
    console.log(Resta(num1, num2))
    console.log(`La resta es ${Resta(num1,num2)}`)
    Resultado1.innerHTML = `La resta es ${Resta(num1, num2)}`
})

btnEj3.addEventListener('click', () => {
    LeerDatos()
    console.log(Multiplicacion(num1, num2))
    console.log(`La multiplicación es ${Multiplicacion(num1,num2)}`)
    Resultado1.innerHTML = `La multiplicacion es ${Multiplicacion(num1, num2)}`
})

btnEj4.addEventListener('click', () => {
    LeerDatos()
    console.log(Division(num1, num2))
    console.log(`La división es ${Division(num1,num2)}`)
    Resultado1.innerHTML = `La división es ${Division(num1, num2)}`
})

import { Formula } from "./grados.js"

console.log (Formula(30))

let numc;

let btnEj = document.getElementById('Ejercicio');
let Resultado2 = document.getElementById('ResEJ2')

function LeerDato (){
    numc = Number(prompt('Ingrese Grados Centígrados'));
}

btnEj.addEventListener('click', () => {
    LeerDato()
    console.log(Formula(numc))
    console.log(`Los ${numc} grados centigrados a Farenheit es ${Formula(numc)}`)
    Resultado2.innerHTML = `${numc} Grados Centigrados =  ${Formula(numc)} Grados Farenheit`
})