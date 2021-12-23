// this

const reservacion = {
    nombre: 'raul',
    apellido: 'castro choque',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log( `El cliente ${this.nombre} reservó y su cantida a pagar es  de ${this.total}`)
    }

}

const reservacion2 = {
    nombre: 'PEDRO',
    apellido: 'DE LAS CASAS',
    total: 52223,
    pagado: false,
    informacion: function() {
        console.log( `El cliente ${this.nombre} reservó y su cantida a pagar es  de ${this.total}`)
    }

}


reservacion.informacion();
reservacion2.informacion();