// UNKNOWN TYPE AND NEVER TYPE

// tipo unknown determina que todavía no conocemos el tipo de dato
let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'Salva';

// userName = userInput; Error porque no se puede asignar unknown a string

if (typeof userInput === 'string') {
  userName = userInput;
}

/**
 * Función que genera un error y como nunca devolverá nada y además rompe el script se le asigna el tipo never
 * @param message 
 * @param code 
 */
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('Ha pasado algo horrible', 500); // Rompe el script y por consola salta el error