// DECONSTRUCTING

// Sacar los valores de un array u objeto en constantes independientes.

// Arrays
const nombres = ['Juan', 'Pedro', 'Luis'];

const [nombre1, nombre2, nombre3] = nombres;

console.log(nombres, nombre1, nombre2, nombre3); // ['Juan', 'Pedro', 'Luis'] Juan Pedro Luis


// Objetos
const persona = {
    nombre: 'Juan',
    edad: 25
};

const { nombre, edad } = persona;

console.log(persona, nombre, edad); // { nombre: 'Juan', edad: 25 } Juan 25