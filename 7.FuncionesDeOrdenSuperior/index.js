//abstraccion
//necesito saber el mayor de dos numeros


function cualEsMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero1 < numero2) {
        return numero2;
    } else {
        return "ambos son iguales";
    }
}

//console.log(cualEsMayor(5,6));
//console.log(cualEsMayor(7,6));
//console.log(cualEsMayor(6,6));

//funciones de orden superior
//una funcion que me devuelva otra funcion en base a un parametro que le doy
function esMayorQue(numero) {
    return (a) => a > numero;
}

let esMayorQueDiez = esMayorQue(10);

//console.log(esMayorQueDiez(12));

//callbacks
function ejecutaUnaFuncionPorCadaElementoDeArray(array, fn) {
    for (const elemento of array) {
        fn(elemento);
    }
}

//ejecutaUnaFuncionPorCadaElementoDeArray(["Juan", "Alfredo", "Estefania"], alert);
//ejecutaUnaFuncionPorCadaElementoDeArray(["Juan", "Alfredo", "Estefania"], console.log);
/* ejecutaUnaFuncionPorCadaElementoDeArray(["Juan", "Alfredo", "Estefania"], (elemento) => {
  alert("Hola " + elemento);
}); */
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function calcular(numero1, numero2, fnCalculo) {
    return fnCalculo(numero1, numero2);
}

/* console.log(calcular(2, 5, sumar));

console.log(calcular(2, 5, (numero1, numero2) => {
  return numero1 * numero2;
})); */

let dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

let restoDeUnaDivision = (numero1, numero2) => {
    return numero1 % numero2;
}

//console.log(calcular(10, 2, restoDeUnaDivision));

//Metodos de busqueda y transformacion
let array = [5, 7, 9, 1];
let arrayDeObjetos = [
    {nombre: "Juan", edad: 13, email: "juan@juan.com"},
    {nombre: "Pepe", edad: 17, email: "pepe@pepe.com"},
    {nombre: "Homero", edad: 42, email: "homero@homero.com"}
];

//recorrer un array pasando el elemento que esta iterando como parametro en un callback
array.forEach(elemento => {
    console.log('foreach: ', elemento);
});

arrayDeObjetos.forEach(function(elemento) {
    console.log('foreach: ', elemento);
})

//sirve para buscar elementos dentro de un array
let elementoEncontrado = array.find(elemento => {
    return elemento === 9;
});

console.log(elementoEncontrado);

let elementoEncontrado2 = arrayDeObjetos.find(elemento => {
    return elemento.nombre === "Pepe";
});

console.log(elementoEncontrado2);

//sirve para filtrar elementos de un array
let arrayFiltrado = array.filter(elemento => {
    return elemento !== 9;
})

console.log('arrayFiltrado', arrayFiltrado);

let arrayDeObjetosFiltrado = arrayDeObjetos.filter(elemento => {
    return elemento.nombre !== "Homero";
})

console.log('arrayFiltrado', arrayDeObjetosFiltrado);

//sirve para saber si existe alguna condicion dentro de un array
let estaHomero = arrayDeObjetos.some(el => el.nombre === "Homero");
console.log("Esta homero: ", estaHomero);

//sirve para convertir un array en otro array
let saludosArray = arrayDeObjetos.map(el => "Hola " + el.nombre);
console.log(saludosArray);

//reduce sirve para reducir todo el array a un solo resultado
let sumaDeArray = array.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);

let sumaDeArrayDeObjetos = arrayDeObjetos.reduce((acumulador, elemento) => {
    return acumulador + elemento.edad;
}, 0);


console.log(sumaDeArray);
console.log(sumaDeArrayDeObjetos);

//sort sirve para ordenar los arrays
//ANOTACION: este metodo va a modificar directamente el array
/*
  el callback de este metodo tiene que devolver -1 en caso de que querramos mover el elemento
  de la derecha a la izquierda
  devolver 1 en caso contrario
  devolver 0 en caso nulo
*/
/*
  [5, 3, 7]
  5 3
  5 7
  [3, 5, 7]
  3 5
  5 7
*/
console.log(array);
array.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
});
console.log(array);

//Objeto MATH

console.log(Math.min(54, -18, 32832));
console.log(Math.max(54, -18, 32832));
console.log(Math.min(54, -18, 32832, Infinity, -Infinity));
console.log(Math.max(54, -18, 32832, Infinity, -Infinity));

console.log(Math.round(54.12)); //entero mas cercano
console.log(Math.floor(54.81)); //redondea para abajo
console.log(Math.ceil(54.81)); //redondea para arriba

console.log(Math.sqrt(91)); //square root - raiz cuadrada

console.log(Math.random()); //un numero pseudoaleatorio entre 0 y 1 (excluyendo el 1)
console.log(Math.floor(Math.random() * 10 + 1));

//Clase Date
let fechaAhora = new Date();
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(fechaAhora);
console.log(fechaAhora.getFullYear());
console.log(meses[fechaAhora.getMonth()]); // 0 - 11
console.log(fechaAhora.getDay());

let casiNavidad = new Date(2022, 11, 24, 23, 59, 59); //año mes dia horas minutos y segundos

console.log(casiNavidad);

console.log(((((fechaAhora - casiNavidad) / 1000) / 60) / 60) / 24);
