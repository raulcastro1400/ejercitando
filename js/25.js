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


// FOR EACH

carrito.forEach( producto => console.log(producto.nombre))



// MAP

carrito.map( producto => console.log(producto.nombre))