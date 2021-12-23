// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10)

const aprendiendo = tecnologia =>   console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript')


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

meses.forEach( function (mes){
    if(mes == 'Marzo') {
        console.log('Marzo existe en el arreglo');
    }
});


//Some ideal para arreglo de objetos

resultado = carrito.some(producto => producto.nombre === 'Celular');

console.log(resultado)


//reduce
resultado = carrito.reduce((total, producto)=> total + producto.precio, 0)


//filter

resultado = carrito.filter(producto => producto.precio < 400)



resultado = carrito.filter(producto => producto.nombre == 'Celular')
console.log(resultado)
