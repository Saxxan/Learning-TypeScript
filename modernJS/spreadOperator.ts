// SPREAD OPERATOR

const nombres = ['Juan', 'Pedro', 'Luis'];

// Con el spread operator ... puedo decirle a JavaScript que extraiga los valores de un array y los coloque en otro.
const nuevosNombres = ['Carlos', 'Enrique', ...nombres];

console.log(nombres, nuevosNombres); // ['Juan', 'Pedro', 'Luis'] ['Carlos', 'Enrique', 'Juan', 'Pedro', 'Luis']


const persona = {
    nombre: 'Juan',
    edad: 25
};

// De igual manera puedo coger los valores de un objeto y colocarlos en otro.
// Añadirle más o menos
const persona2 = {
    ...persona,
    altura: 1.75
};

// Incluso cambiar valores de las propiedades
const persona3 = {
    ...persona,
    nombre: 'Carlos'
};

console.log(persona, persona2, persona3); // { nombre: 'Juan', edad: 25 } { nombre: 'Juan', edad: 25, altura: 1.75 } { nombre: 'Carlos', edad: 25 }



/**
 * Función que puede recibir un número indeterminado de parámetros
 * siempre que sean de tipo number. Lo entenderá como un array de números.
 * Los suma y devuelve la suma.
 * @param numeros 
 * @returns 
 */
const sumaMultiple = (...numeros: number[]): number => {
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumaMultiple(1, 2, 3, 4, 5)); // 15