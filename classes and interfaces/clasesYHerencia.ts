// PRIMERA CLASE
class Persona {
    // Solo se puede leer, no modificar y solo desde dentro de la clase
    private readonly id: string;
    nombre: string;
    edad: number;
    // Al ser privada solo se puede acceder desde los métodos dentro de la clase
    private hobbies: string[];

    // Inicialización de la clase
    constructor(name: string, age: number) {
        this.nombre = name;
        this.edad = age;
        this.hobbies = [];
    }

    // Métodos

    // Método que devuelve un string con el nombre y la edad
    mostrar() {
        return `${this.nombre} tiene ${this.edad}`;
    }

    // Método que añade un hobbie al array de hobbies
    añadirHobbie(hobbie: string) {
        this.hobbies.push(hobbie);
    }

    // Método que borra un hobbie del array de hobbies
    borrarHobbie(hobbie: string) {
        this.hobbies = this.hobbies.filter(h => h !== hobbie);
    }

    // Método que devuelve los hobbies
    mostrarHobbies() {
        return this.hobbies;
    }
}

const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Pedro', 25);

persona1.añadirHobbie('Videojuegos');
persona1.añadirHobbie('Futbol');

// Tests
console.log(persona1, persona2);
console.log(persona1.mostrar());
console.log(persona1.mostrarHobbies());


// SEGUNDA CLASE (HERENCIA)
class Niño extends Persona {
    constructor(name: string, age: number, private school: string) {
        super(name, age);
    }

    // GETTER Y SETTER son métodos que con el mismo nombre puedes modificar o leer propiedades
    // Si no pones argumentos te devuelve el valor, si lo pones lo modifica
    get escuela(): string {
        return this.school;
    }

    set escuela(school: string) {
        this.school = school;
    }

    // Métodos
    mostrar() {
        return `${super.mostrar()} y va a la escuela ${this.school}`;
    }
}

const niño1 = new Niño('Pepe', 10, 'Colegio María Asunción');
niño1.añadirHobbie('Jugar al fútbol');

// Tests
console.log(niño1.mostrar());
console.log(niño1.mostrarHobbies());
console.log(niño1.escuela);
niño1.escuela = 'Colegio San José';
console.log(niño1.escuela);