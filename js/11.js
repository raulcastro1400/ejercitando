const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Forma Anterior
/* const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto); */


//desctructuting de objetos

const {precio, nombreProducto, disponible} = producto;



console.log(precio);
console.log(nombreProducto);
console.log(disponible);