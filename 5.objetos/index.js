//un objeto es una estructura para agrupar datos.
//clave : valor
// clave -> nombre con el cual identificamos el dato de un objeto. en este caso nombre, apellido y edad
// valor -> es el dato en si, en este caso Angela, Pérez y 28.

/*
let persona = {
    nombre: 'Angela',
    apellido: 'Pérez',
    edad: 28
}
console.log(persona.nombre + ' ' + persona.edad )
*/





//FUNCIONES CONSTRUCTORAS (escribirlas con mayúscula)

function Persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;


//metodos

    this.saludar = function (){
        alert('Hola, me llamo ' + this.nombre + ', soy una persona')
    }
}


let persona = new Persona ('Angela', 'Pérez', ' 28');
let persona2 = new Persona('Juan', 'Loro', '50');

console.log(persona);
console.log(persona2);
