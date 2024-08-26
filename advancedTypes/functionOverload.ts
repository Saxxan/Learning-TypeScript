// FUNCTION OVERLOAD

type Combinable = number | string;

// Esto es una sobrecarga de funciones
// Se puede definir varias veces la misma función con diferentes parámetros
// y TypeScript se encargará de inferir el tipo de retorno
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", " Schwarz");
console.log(result.split(" ")); // ['Max', 'Schwarz']
