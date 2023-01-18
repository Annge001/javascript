let listaDeProductos = [
    {descripcion: "Platano", precio: 150},
    {descripcion: "Pera", precio: 200},
    {descripcion: "Uva", precio: 250},
    {descripcion: "Durazno", precio: 150},
    {descripcion: "Moras", precio: 200},
];

let carritoFrutas=[]


function mostrarFrutas() {

    var texto = '';
    for (let i = 0; i < listaDeProductos.length; i++) {

        texto = texto + "Fruta  : " + listaDeProductos[i].descripcion + " Precio  : $ " + listaDeProductos[i].precio + "\n";
    }

      alert(texto)
    nombre = prompt(texto);
    obtieneFruta(nombre);

}


function obtieneNombrePersona() {
    let nombre = '';
    var texto = '';
    for (let i = 0; i < listaDeProductos.length; i++) {

        texto = texto + "Fruta  : " + listaDeProductos[i].descripcion + " Precio  : $ " + listaDeProductos[i].precio + "\n";
    }
    while (nombre === '') {
        nombre = prompt('¡Hola! Ingresa tu nombre ');

        if (nombre) {
            alert('Un Gusto ' + nombre + "\n" + 'productos disponibles:' + "\n" + texto);
            mostrarFrutas();
        } else {
            alert('¡UPS! hubo un problema, vuelve a intentar ');
        }
    }

}



function obtieneFruta(fruta) {

        switch (fruta) {
            case 'Platano':
                let frutaPlatano = listaDeProductos.find(producto => producto.descripcion === fruta);
                carritoFrutas.push(frutaPlatano);
                break;

            case 'Pera':
                let frutaPera = listaDeProductos.find(producto => producto.descripcion === fruta);
                carritoFrutas.push(frutaPera);
                break;

            case 'Uva':
                let frutaUva = listaDeProductos.find(producto => producto.descripcion === fruta);
                carritoFrutas.push(frutaUva);
                break;

            case 'Durazno':
                let frutaDurazno = listaDeProductos.find(producto => producto.descripcion === fruta);
                carritoFrutas.push(frutaDurazno);
                break;

            case 'Moras':
                let frutaMoras = listaDeProductos.find(producto => producto.descripcion === fruta);
                carritoFrutas.push(frutaMoras);
                break;
        }
    }


function imprimeFruta() {

        switch (cantidadDeFruta) {
            case 0 :
                alert('Fruta 1: ' + fruta1);
                break;
            case 1 :
                alert('Fruta 2: ' + fruta2);
                break;
            case 2 :
                alert('Fruta 3: ' + fruta3);
                break;
            case 3 :
                alert('Fruta 4: ' + fruta4);
                break;
        }

}



