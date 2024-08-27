//  NULLISH COALESCING

// Si obtuviesemos un input por ejemplo del DOM, este podría dar valores como null, undefined o vacío.
const input = "";

// En este caso, si input es null, undefined o vacío, se asignará el valor de la derecha.
const storedValue = input || "DEFAULT";

// En este caso con el operardor nullish coalescing, solo se asignará el valor de la derecha si el input es null o undefined.
const storedValueNullish = input ?? "DEFAULT";

// Si el input es null, undefined o vacío, se asignará el valor de la derecha.
console.log(storedValue); // DEFAULT
console.log(storedValueNullish); // ''
