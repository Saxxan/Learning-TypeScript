// INTERFACES
// Las interfaces son una forma de definir la estructura de un objeto
// Indicando sus propiedades y métodos y del tipo que son
interface Persona {
    // Se pueden definir propiedades sólo de lectura
    readonly nombre: string;
    edad: number;
    greet: () => void;
}

// Se puede definir una clase que implemente una interfaz
// De esta manera se pueden declarar los métodos en la clase e instanciarlos dentro de la creación
// de las variables
class Usuario implements Persona {
    nombre;
    edad;

    constructor(n: string, e: number) {
        this.nombre = n;
        this.edad = e;
    }

    greet() {
        console.log('Hola usuario ' + this.nombre);
    }
}

let usuario1: Persona = {
    nombre: 'Salva',
    edad: 27,
    greet() {
        console.log('Hola ' + this.nombre);
    }
}

let usuario2 = new Usuario('Paloma', 27);

usuario1.greet(); // Hola Salva
usuario2.greet(); // Hola usuario Paloma