//array metods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

//forEach


meses.forEach(function(mes){
    console.log(mes)
})


meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo existe en el arreglo')
    }
});

//includes

let resultado = meses.includes('Marzo');

//Some ideal para arreglo de objetos

resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})

resultado = carrito.some(producto => producto.nombre === 'Celular');


//reduce

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)


resultado = carrito.reduce((total, producto)=> total + producto.precio, 0)


//filter

resultado = carrito.filter(function(producto){
    return producto.precio < 400
})

resultado = carrito.filter(function(producto){
    return producto.nombre == 'Celular'
})

console.log(resultado)