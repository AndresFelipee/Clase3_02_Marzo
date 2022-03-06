const hm = 20000
const he = 30000
let ht, hx, salario

function LeerDatos() {
    ht = Number(prompt('Ingrese cantidad de horas trabajadas'))
}

LeerDatos()
Calcular(ht)

function Calcular(ht) {
    if (ht >= 1 && ht <= 40){       
        salario = ht * hm;
    }

    else if (ht > 40)
        salario = (hm * 40) + (he * (ht - 40))

    else
        alert('Valor no válido')
}

console.log('Su salario es de: $', salario)
