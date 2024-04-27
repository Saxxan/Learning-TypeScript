// FUNCIONES COMO CONSTANTES Y ARGUMENTOS

/**
 * Función sumar tiene dos argumentos tipo number y devuelve un number
 * Se le pasan dos argumentos y devuelve la suma de ambos
 * @param a primer argumento
 * @param b segundo argumento
 * @returns devuelve la suma de ambos
 */
const sumar = (a: number, b: number): number => a + b;

console.log(sumar(2, 3)); // 5



/**
 * Función sumar2 tiene dos argumentos tipo number y uno de ellos tiene un valor por defecto
 * Se le puede pasar un solo argumento y el segundo tomará el valor por defecto
 * O se le pueden pasar los dos argumentos
 * @param a valor a pasar
 * @param b valor a pasar o valor por defecto
 * @returns suma de ambos
 */
const sumar2 = (a : number, b : number = 2): number => a + b;

console.log(sumar2(2)); // 4
console.log(sumar2(3, 3)); // 6



/**
 * La función sumar3 tiene dos argumentos tipo number y uno de ellos tiene un valor por defecto
 * Si el argumento con valor por defecto está antes que el argumento sin valor por defecto puede resultar en problemas si no se define bien 
 * al usar la función. RECOMENDABLE PRIMERO LOS ARGUMENTOS SIN VALOR POR DEFECTO Y LUEGO LOS QUE TIENEN VALOR POR DEFECTO
 * @param a 
 * @param b 
 * @returns 
 */
const sumar3 = (a: number = 2, b: number): number => a + b;

console.log(sumar3(undefined, 3)); // 5
//console.log(sumar3(3)); // Error, no se puede pasar un argumento sin valor por defecto después de uno con valor por defecto