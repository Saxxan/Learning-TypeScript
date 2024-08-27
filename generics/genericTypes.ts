// GENERIC TYPES

// Estas dos declaraciones son iguales
// Al determinar el tipo de dato que almacena este array,
// podemos acceder a los métodos de javascript propios de ese tipo de dato
const names: string[] = []; // Array of strings
const names2: Array<string> = []; // Array of strings

// CREATING A GENERIC FUNCTION

/**
 * Función que recibe dos argumentos y los fusiona
 * Mediante esta sintaxis le decimos a typescript que los argumentos que recibe es posible que sean de distinto tipo
 * La función devolverá la intersección entre los dos argumentos dependiendo del tipo
 * @param objA
 * @param objB
 * @returns object
 */
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Al llamar a la función, typescript infiere el tipo de dato de los argumentos
const mergedObj = merge({ name: "Max" }, { age: 30 });

console.log(mergedObj); // {name: 'Max', age: 30}
