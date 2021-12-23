//CLASESS

class Producto {
    constructor(nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene el precio de $ ${this.precio} `
    }
}


const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Celular samgumg', 500, false);

//HERENCIA


class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}

const libro = new Libro('JavaScrip la revolución', 120, '12989763122');

console.log(libro.formatearProducto())
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
