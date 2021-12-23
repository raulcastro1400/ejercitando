// Arreglos o Arrays

const numeros = [10,20,30,40,50]


//con consutructo

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo')

console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Raul", Trabajo: "Programador"}, [1,2,3]]

console.table(arreglo)


//ACCEDER A LOS VALORES DE UN ARREGLO

/* console.log(numeros[2]);
console.log(numeros[4]);
console.log(numeros[200]); */


//conocer la extension de un arreglo
/* 
console.log(meses,length)


numeros.forEach(function(numero){
    console.log(numero)
}) */

numeros.push(60,70,80,90) //lo agrega al final del arreglo

numeros.unshift(-10,-20,-30) //lo agrega al inicio del arreglo
/* 

meses.pop(); //Elimina el ultimo elemento
meses.shift(); // elimina al el primer elemento. */


meses.splice(2,1);


console.table(meses)

//rest operator o spread operator


const nuevoArreglo = [...meses, 'Junio'];

console.log(nuevoArreglo)
