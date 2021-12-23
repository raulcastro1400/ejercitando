const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;

    case 'cheque':
        console.log('El usuario pagara con cheque, revisaremos los fondos');
        break;   
    
    
    case 'efectivo':
        console.log('El usuario pago con efectivo');
        break;  

    default:
        console.log('aun no haz pagado')
        break;
}