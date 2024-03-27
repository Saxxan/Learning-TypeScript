// UNION TYPES & LITERAL TYPES & ALIAS

// Creo un alias para determinar un UNION TYPE
type Combinable = number | string;
// Creo un alias para determinar un LITERAL TYPE
type ConversionDescriptor = 'as-number' | 'as-text';

/**
 * Función que recibe dos argumentos y los combina
 * En caso de ser números los suma y en caso de ser strings los concatena
 * @param a Primer argumento
 * @param b Segundo argumento
 * @returns Resultado de la combinación
 */
function combine(
    // Se puede definir un tipo de dato específico o unión de tipos
    a: Combinable, 
    b: Combinable, 
    // Se pueden definir tipos de datos literales
    resultConversion?: ConversionDescriptor
    ) {
        let result; 

        if (typeof a === 'number' && typeof b === 'number' || resultConversion === 'as-number') {
            result = +a + +b;
        } else if (typeof a === 'string' && typeof b === 'string' || resultConversion === 'as-text') {
            result = a + ' ' + b;
        } else {
            throw new Error('Los argumentos deben ser del mismo tipo');
        }
            
        return result;
}

const combinedNums = combine(30, 26);
console.log(combinedNums); // 56

const combinedStrings = combine('Max', 'Anna');
console.log(combinedStrings); // Max Anna

const combinedNumsText = combine('30', '26', 'as-text');
console.log(combinedNumsText); // 30 26

const combinedNumsNumber = combine('30', '26', 'as-number');
console.log(combinedNumsNumber); // 56

const combinedNumString = combine('Max', 26);
console.log(combinedNumString); // Error: Los argumentos deben ser del mismo tipo