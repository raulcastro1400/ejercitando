"use strict" //correr Js en modo Stricto

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);  //. freeze .seal  freeze no permite modificar ni eliminar , Seal si permite modificar las propiedades.

/* producto.imagen = 'imagen.jpg' */

/* console.log(Object.isFrozen(producto)); */

console.log(producto)


