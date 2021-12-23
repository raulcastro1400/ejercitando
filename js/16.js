//DECLARACIÓN DE FUNCIÓN

function sumar(){
    console.log(10 + 10);
}

sumar();

// Expresión de la función

const sumar2 = function(){
    console.log(3 + 3);
}

sumar2()


//IIFE  no funciona en las ultimas versiones

(function () {
    console.log('Esto es una función');
})();

