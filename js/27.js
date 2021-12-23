//POO

//objert literal
const producto = {
    nombre: 'tablet',
    precio: 500
}


//objet Constructor

function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;


}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Celular samgumg', 500, false);
const producto4 = new Producto('tabler de 10"', 4500, true);

console.log(producto2, producto3, producto4)