function validarIMC(imc) {
    if (imc < 18.5) {
        return 'puede que estés muy delgado';
    } else if (imc < 25) {
        return 'al parecer estás saludable';
    } else {
        return 'puede que tengas sobrepeso';
    }
}

function calcularIMC(pesoEnKilos, alturaEnMetros) {
    var imc = pesoEnKilos / (alturaEnMetros * alturaEnMetros);
    return imc;
}

function IMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
    var imc = calcularIMC(pesoEnKilos, alturaEnMetros);
    var clasificacion;
    clasificacion = validarIMC(imc);

    var respuesta = 'Hola, tu IMC es ' + imc + ' y  ' + clasificacion;
    alert(respuesta);
}
