// INDEX TYPES
// Los index types permiten crear objetos (interfaces) que sean más flexibles en cuanto a los parámetros que aceptan.
// Siendo estos parámetros de tipo string.
interface ErrorContainer {
  [prop: string]: string;
}

const errorMessage: ErrorContainer = {
  errorOrigin: "Email input",
  error: "Email is invalid",
  errorCode: "001",
};
