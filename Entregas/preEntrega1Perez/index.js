function obtieneNombrePersona (){
    let nombre = '';
    while(nombre === ''){
        nombre = prompt('¡Hola! Ingresa tu nombre ');

        if (nombre){
            alert('Un Gusto ' + nombre);
        }else{
            alert('¡UPS! hubo un problema, vuelve a intentar ');
        }
    }

}

let fruta1, fruta2, fruta3, fruta4;


obtieneNombrePersona();
obtieneNombreFruta();
imprimeNombreFruta();


function obtieneNombreFruta(){
    for (let cantidadFruta = 0;
         cantidadFruta < 4;
         cantidadFruta++) {

        switch (cantidadFruta) {
            case 0:
                fruta1 = prompt('Fruta 1' );
                break;

            case 1:
                fruta2 = prompt('Fruta 2');
                break;

            case 2:
                fruta3 = prompt('Fruta 3');
                break;

            case 3:
                fruta4 = prompt('Fruta 4');
                break;
        }
    }
}
function imprimeNombreFruta (){
    for (let cantidadDeFruta = 0;
         cantidadDeFruta < 4;
         cantidadDeFruta++) {

        switch (cantidadDeFruta){
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
}


