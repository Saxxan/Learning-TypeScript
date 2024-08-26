// DESCRIMINATED UNIONS

interface Pajaro {
  type: "pajaro";
  velocidadVuelo: number;
}

interface Caballo {
  type: "caballo";
  velocidadGalope: number;
}

type Animal = Pajaro | Caballo;

function moveAnimal(animal: Animal): void {
  switch (animal.type) {
    case "pajaro":
      console.log("Volando a " + animal.velocidadVuelo + " km/h");
      break;
    case "caballo":
      console.log("Galopando a " + animal.velocidadGalope + " km/h");
      break;
  }
}

moveAnimal({ type: "pajaro", velocidadVuelo: 100 }); // Volando a 100 km/h
moveAnimal({ type: "caballo", velocidadGalope: 50 }); // Galopando a 50 km/h
