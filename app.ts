// CLASES ABSTRACTAS
// Las clases abstractas no se pueden instanciar solo pueden ser heredadas
abstract class Persona {
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

  // Método abstracto que se tiene que implementar en las clases que heredan de esta
  abstract mostrar(): void;

  // Método que añade un hobbie al array de hobbies
  añadirHobbie(hobbie: string) {
    this.hobbies.push(hobbie);
  }

  // Método que borra un hobbie del array de hobbies
  borrarHobbie(hobbie: string) {
    this.hobbies = this.hobbies.filter((h) => h !== hobbie);
  }

  // Método que devuelve los hobbies
  mostrarHobbies() {
    return this.hobbies;
  }
}

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
    return `${this.nombre} y va a al ${this.school}`;
  }
}

const niño1 = new Niño("Pepe", 10, "Colegio María Asunción");
niño1.añadirHobbie("Jugar al fútbol");

// Tests
console.log(niño1.mostrar());
console.log(niño1.mostrarHobbies());
console.log(niño1.escuela);
niño1.escuela = "Colegio San José";
console.log(niño1.escuela);
