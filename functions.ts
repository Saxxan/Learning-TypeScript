// FUNCTION TYPES

/**
 * Función que recibe dos parámetros de tipo number y devuelve la suma de ambos
 * Se especifica que lo que se devuelve es de tipo number
 * @param n1 
 * @param n2 
 * @returns 
 */
function add(n1: number, n2: number): number {
    return n1 + n2;
}

/**
 * Función que recibe un número que imprimir por consola
 * Se especifica que no devuelve nada por lo que el tipo es void
 * @param num 
 */
function printResult(num: number): void {
    console.log('Result: ' + num);
}

/**
 * Función que recibe 2 parámetros de tipo number y un parámetro callback de tipo Function especifíca
 * La función tiene retorno void ya que no devuelve nada
 * @param n1 number
 * @param n2 number
 * @param callback Function con parámetro number y retorno void
 */
function addAndHandle(n1: number, n2: number, callback: (num: number) => void): void {
    const result = n1 + n2;
    callback(result);
}


// TESTS //

printResult(add(5, 12)); // Result: 17

console.log(printResult(add(5, 12))); // undefined

// Creo una variable de tipo Fuction y se le puede asignar cualquier función
let combineValues: Function;

combineValues = add;
combineValues = printResult;

console.log(combineValues(8, 8)); // undefined porque la función asignada es printResult que no devuelve nada

/**
 * Variable que se le especifíca un tipo Function específica.
 * La función que se le asigne debe recibir dos parámetros de tipo number y devolver un número
 */
let combineValues2: (a: number, b: number) => number;

combineValues2 = add;

console.log(combineValues2(8, 8)); // 16

// El callback es una función definida en el momento
addAndHandle(10, 20, (result) => {
    console.log('Callback -> Result: ' + result); // Callback -> Result: 30
})