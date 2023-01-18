//Arrays
//0 - n
let listaDeNombres = ['Jorge', 'Luis', 'Luis', 'Alfredo'];

//nombreDelArray.length -> es para saber cuantos elementos tiene una lista
console.log('length: ', listaDeNombres.length);
//nombreDelArray[indice] -> las posiciones de los elementos van desde el numero 0
console.log('acceder segun indice: ', listaDeNombres[0]);
//nombreDelArray.push(dato) -> sirve para agregar un nuevo dato al final de la lista
console.log('push: ', listaDeNombres);
listaDeNombres.push('Carlos');
console.log(listaDeNombres);
//nombreDelArray.pop() -> sirve para quitar el ultimo elemento de una lista
listaDeNombres.pop();
console.log('pop: ', listaDeNombres);
//nombreDelArray.shift() -> sirve para quitar el primer elemento de una lista
listaDeNombres.shift();
console.log('shift: ', listaDeNombres);
//nombreDelArray.indexOf(dato) -> sirve para saber el indice de un dato (solo devuelve el primer indice
//que encuentre)
console.log('indexOf: ', listaDeNombres.indexOf('Luis'));
//nombreDelArray.splice(numerico, numerico) -> sirve para quitar elementos dentro de una lista
//en un rango de posiciones
listaDeNombres.splice(listaDeNombres.indexOf('Luis'), 1); //el primer numero indica desde que indice borrar
//el segundo indica que cantidad de elementos borrar a partir del indice
console.log('splice: ', listaDeNombres);
//nombreDelArray.forEach(function(dato, index) {}) -> sirve para recorrer todos los elementos
//de una lista
listaDeNombres.forEach((dato, index) => {
    console.log('foreach: ', dato);
    console.log('foreach: ', index);
})
//nombreDelArray.map((dato, index) => {}) -> modificar un array dependiendo de lo que
//devuelva la funcion anonima
let largoDeNombres = listaDeNombres.map(nombre => nombre.length);
console.log('map: ', largoDeNombres);
//nombreDelArray.some(dato => dato === 'lo que sea que quiera comprobar') -> sirve para
//saber si se encuentra un dato en la lista
//booleano
console.log('some: ', listaDeNombres.some(nombre => nombre === 'Alfredo'));
console.log('includes: ', listaDeNombres.includes('Alfredo'));
//nombreDelArray.join(string) -> nos concatena todos los strings que tengamos dentro de la lista
console.log('join: ', listaDeNombres.join(' | '));

let listaRoja = ["Jorge", "Susana", "Perlita"];
let listaVerde = ["Pepe", "Roberta"];
let nuevaLista = listaRoja.concat(listaVerde);
console.log('concat: ', nuevaLista);

//nombreDelArray.reverse() -> sirve para revertir el orden de una lista
console.log('reverse: ', nuevaLista.reverse());


//verificar si hay algun nombre que supere las 12 letras de largo
let hayNombresConMuchasLetras = nuevaLista
    .map(nombre => nombre.length)
    .some(cantidad => cantidad >= 7);
console.log('combinacion de metodos', hayNombresConMuchasLetras);

//arrays de objetos
let listaDeProductos = [
    {descripcion: "papa", precio: 150},
    {descripcion: "zanahoria", precio: 22},
    {descripcion: "remolacha", precio: 33},
    {descripcion: "lechuga", precio: 444},
    {descripcion: "tomate", precio: 555},
];
/* console.log(listaDeProductos);

let producto = prompt("Ingrese el producto para ver el precio");
let indiceDelProductoSeleccionado = listaDeProductos
  .map(producto => producto.descripcion)
  .indexOf(producto);
console.log(indiceDelProductoSeleccionado); */

//CRUD Create Read Update Delete

//Create
function createProduct() {
    let descripcion = prompt("Ingrese descripcion del producto");
    let precio = Number(prompt("Ingrese precio de " + descripcion));
    let producto = {
        descripcion: descripcion,
        precio: precio
    };

    listaDeProductos.push(producto);
}

//read
function readProduct() {
    let descripcion = prompt("Ingrese la descripcion del producto");
    let producto = listaDeProductos.find(producto => producto.descripcion === descripcion);

    return producto;
}

//update
function updateProduct() {
    let producto = readProduct();

    producto.descripcion = prompt("Ingrese una nueva descripcion para " + producto.descripcion, producto.descripcion);
    producto.precio = prompt("Ingrese un nuevo precio para " + producto.descripcion, producto.precio);
}

//delete
function deleteProduct() {
    let descripcion = prompt("Ingrese la descripcion del producto que va a borrar");
    listaDeProductos = listaDeProductos.filter(producto => producto.descripcion === descripcion);
}
