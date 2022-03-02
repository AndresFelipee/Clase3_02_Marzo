const hm = 20000
const he = 30000
let ht, salario, hx

function LeerDatos (){
    ht = Number(prompt('Ingrese cantidad de horas trabajadas'))
}

LeerDatos ()
Calcular (ht)

function Calcular(ht){
    if(ht<=40)
    salario = ht * hm;
    else if (ht>40)
    hx = ht - 40;
    
    
}