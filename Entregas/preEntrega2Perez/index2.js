function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);

    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;

    if (imc < 18.5) {
        clasificacion = 'puede que estés muy delgado';
    } else if (imc < 25) {
        clasificacion = 'al parecer estás saludable';
    } else {
        clasificacion = 'puede que tengas sobrepeso';
    }

    var respuesta = 'Hola, tu IMC es ' + imc + ' y  ' + clasificacion;
    alert(respuesta);
}
