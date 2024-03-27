// EJEMPLO BÁSICO DE TYPESCRIPT

/**
 * Función que recibe dos argumentos de tipo número y los suma
 * Recibe también un booleano para determinar si se imprime el resultado
 * Recibe un string para concatenar con el resultado
 * @param n1 Primer número
 * @param n2 Segundo número
 * @param showResult Booleano para determinar si se imprime el resultado
 * @param phrase Texto para concatenar con el resultado
 * @returns 
 */
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // Ejemplo de control de error por tipo de dato con JavaScript
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }

    const result = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultMessage = 'The result is: ';

const result = add(number1, number2, printResult, resultMessage);

console.log(result); // The result is: 7.8