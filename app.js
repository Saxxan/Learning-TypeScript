// GENERIC TYPES
// Estas dos declaraciones son iguales
// Al determinar el tipo de dato que almacena este array, 
// podemos acceder a los métodos de javascript propios de ese tipo de dato
var names = []; // Array of strings
var names2 = []; // Array of strings
// CREATING A GENERIC FUNCTION
/**
 * Función que recibe dos argumentos y los fusiona
 * Mediante esta sintaxis le decimos a typescript que los argumentos que recibe es posible que sean de distinto tipo
 * La función devolverá la intersección entre los dos argumentos dependiendo del tipo
 * @param objA
 * @param objB
 * @returns object
 */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj); // {name: 'Max', age: 30}
