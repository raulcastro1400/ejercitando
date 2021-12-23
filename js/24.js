//FOR LOOP
/* 
for(let i = 0; i < 10; i++){
    console.log(i);
} */

/* for(let i = 1; i <= 100; i++){
   if( i % 2 === 0  ){
    console.log(`El numero ${i} es PAR`)
   }else{
    console.log(`El numero ${i} es IMPAR`)   
   }
}

 */

const carrito =[
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 50},
    {nombre: 'tablet', precio: 300},
    {nombre: 'audiforno', precio: 200},
    {nombre: 'teclado', precio: 20},
    {nombre: 'Celular', precio: 340},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptops', precio: 800},

]

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre)
}


// WHILE LOOP

/* let i = 0 // indice

while(i < 10){ // condición
    console.log(i)

    if(i % 2 === 0){
        console.log(`El número ${i} es PAR `)
    }

    i++;
} */




//DO WHILE LOOP
let i = 0

do {
    console.log(i)

    i++
}while( i < 10)