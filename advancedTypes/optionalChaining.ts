// OPTIONAL CHAINING

// Si tenemos datos como por ejemplo este objeto, que viene de una petición o de una estructura que Typescript no controla
// Puede que los campos que queremos acceder no existan y por tanto, si intentamos acceder a ellos, nos de un error
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

// Para evitar errores, podemos utilizar el optional chaining
// Añadir este operador '?' después de la propiedad que queremos acceder, nos permite acceder a ella si existe, y si no, no dará error
console.log(fetchedUserData?.job?.title); // CEO
