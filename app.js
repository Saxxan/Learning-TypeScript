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
 * Al añadir que el tipo que espera la función sea de cualquier tipo pero que sea un objeto (T extends object),
 * podemos acceder a las propiedades de los objetos que se pasen como argumentos y limitar si se pasa otro tipo que no sea objeto
 * @param objA
 * @param objB
 * @returns object
 */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// Al llamar a la función, typescript infiere el tipo de dato de los argumentos
var mergedObj = merge({ name: "Max" }, { age: 30 });
// const mergeObj2 = merge({ name: "Max" }, 30); // Error porque el segundo argumento no es un objeto
console.log(mergedObj); // {name: 'Max', age: 30}
/**
 * Esta función espera un argumento de tipo T que extiende Lengthy, esto especifíca que tiene una propiedad length
 * La función devuelve un array con el argumento y una descripción de la longitud del argumento
 * @param elemento
 * @returns
 */
function countAndDescribe(elemento) {
    var description = 'No tiene valor';
    if (elemento.length === 1) {
        description = 'Tiene ' + elemento.length + ' caracter';
    }
    else if (elemento.length > 1) {
        description = 'Tiene ' + elemento.length + ' caracteres';
    }
    return [elemento, description];
}
console.log(countAndDescribe('Hola')); // ['Hola', 'Tiene 4 caracteres']
// KEYOF CONSTRAINTS
/**
 * En esta función se espera un argumento de tipo objeto y el segundo argumento será una propiedad de ese objeto.
 * Declaramos que el primer argumento es de tipo object y que el segundo será el nombre de una propiedad de ese objeto (U extends keyof T)
 * @param obj
 * @param key
 * @returns
 */
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name')); // Value Max
