// HERENCIA EN INTERFACES
interface Named {
    readonly name: string;
}

interface Aged {
    // Al añadir el ? se convierte en un parámetro opcional
    readonly age?: number;
}

// A diferencia de las clases se pueden heredar múltiples interfaces en otra.
interface Person extends Named, Aged {
    greet: () => void;
}

class Usuario implements Person {
    name;
    age;

    constructor(n: string, a?: number) {
        this.name = n;
        if (a) {
            this.age = a;
        }
    }

    greet() {
        if(this.age) {
            console.log(
                `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`
            );
        } else {
            console.log(`Hola, mi nombre es ${this.name}.`);
        
        }
        
    }
}

let usuario1 = new Usuario('Juan', 25);
let usuario2 = new Usuario('Pedro');

usuario1.greet(); // Hola, mi nombre es Juan y tengo 25 años.
usuario2.greet(); // Hola, mi nombre es Pedro.