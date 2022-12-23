/* // switch case

let edad = prompt('Ingresa tu edad ');
edad = Number(edad);


switch (edad){
    case '6':
        alert ('Entrada gratis')
        break;

    case '18':
        alert('Entrada con 50% dscto')
        break;

    default:
        alert('Entrada normal')
        break;
} */


/*iteracion
let jugador1, jugador2, jugador3, jugador4;


for (let cantidadJugadores = 0;
     cantidadJugadores < 4;
     cantidadJugadores++) {

    switch (cantidadJugadores) {
        case 0:
            jugador1 = prompt('Ingrese jugador 1' );
            break;

        case 1:
            jugador2 = prompt('Ingrese jugador 2');
            break;

        case 2:
            jugador3 = prompt('Ingrese jugador 3');
            break;

        case 3:
            jugador4 = prompt('Ingrese jugador 4');
            break;
    }
}

for (let cantidadDeAlerts = 0;
     cantidadDeAlerts < 4;
     cantidadDeAlerts++) {

        switch (cantidadDeAlerts){
            case 0 :
                alert('Jugador1 se llama: ' + jugador1);
                break;
            case 1 :
                alert('Jugador2 se llama: ' + jugador2);
                break;
            case 2 :
                alert('Jugador3 se llama: ' + jugador3);
                break;
            case 3 :
                alert('Jugador4 se llama: ' + jugador4);
                break;
        }
}
let listaNombres = '';
*/



/* //while

let nombre = prompt('Ingresa un nombre o 0');
//cuidado con el bucle sin fin de while

while (nombre !=0){
    listaNombres = listaNombres + nombre + ', ';
    nombre = prompt('Ingresa un nombre');
}

alert('esta es tu lista de nombres: ' + listaNombres)*/

/*



 /* //misma funcion del for pero con while
const cantidadDeIteraciones= 4;

let numeroIteracion = 0;

while (numeroIteracion < cantidadDeIteraciones){
    alert('La iteracion en la que estamos es: ' + numeroIteracion);
    numeroIteracion++;
}*/



/* // do while



let nombre;
let listaDeNombres = '';

do{
    nombre = prompt( 'ingrese un nombre o 0');
    listaDeNombres = listaDeNombres + nombre + '|';
}while (nombre != 0);


alert('Su lista de nombres es: ' + listaDeNombres)
 */
