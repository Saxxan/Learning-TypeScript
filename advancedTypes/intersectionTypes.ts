// TIPOS DE INTERSECCIÓN

// Crear tipos de datos como por ejemplo estos tipos de datos (objeto) Admin y Empleado
// Pueden servir para crear otro tipo que sea combinación de ambos
// Esto se puede hacer también mediante interfaces y clases usando la herencia

type Admin = {
    nombre: string;
    privilegios: string[];
}

type Empleado = {
    nombre: string;
    fechaInicio: Date;
}

// Crear un tipo de dato que sea la combinación de ambos
// Este tipo de dato tendrá todas las propiedades de Admin y Empleado
type EmpleadoPromocionado = Admin & Empleado;

const empleado1: EmpleadoPromocionado = {
    nombre: 'Juan',
    fechaInicio: new Date(),
    privilegios: ['crear', 'editar']
}


// TIPOS DE INTERSECCIÓN CON UNIONES
// Se pueden combinar tipos de datos con uniones y luego hacer una intersección de estos
type Combinable = string | number;
type Numeric = number | boolean;

// Este tipo de intersección solo permitirá valores numéricos porque es el único tipo que comparten ambas uniones
type Universal = Combinable & Numeric;


// TYPE GUARDS
// Las type guards son condiciones que permiten saber si un tipo de dato es de un tipo específico antes de ejecutar una acción
// Se pueden usar con tipos de datos primitivos, objetos, clases, etc.
// Se pueden usar con operadores typeof, in, instanceof, etc.

function add(a: Combinable, b: Combinable) {
    // Esta condición es un type guard que permite saber si a o b son de tipo string
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type empleadoDesconocido = Empleado | Admin;

function printEmployeeInformation(empleado: empleadoDesconocido) {
    console.log('Nombre: ' + empleado.nombre);
    // Esta condición es un type guard que permite saber si empleado es de tipo Admin
    if ('privilegios' in empleado) {
        console.log('Privilegios: ' + empleado.privilegios);
    }
    // Esta condición es un type guard que permite saber si empleado es de tipo Empleado
    if ('fechaInicio' in empleado) {
        console.log('Fecha de inicio: ' + empleado.fechaInicio);
    }
}

printEmployeeInformation(empleado1); // Imprime nombre, privilegios y fecha de inicio
printEmployeeInformation({ nombre: 'Juan', fechaInicio: new Date() }); // Imprime nombre y fecha de inicio  

// Type guards con clases

class Coche {
    drive() {
        console.log('Conducir coche...');
    }
}

class Camion {
    drive() {
        console.log('Conducir camión...');
    }

    loadCargo(amount: number) {
        console.log('Cargar ' + amount + ' kg');
    }
}

type Vehiculo = Coche | Camion;

const vehiculo1 = new Coche();
const vehiculo2 = new Camion();

function useVehiculo (vehiculo: Vehiculo) {
    vehiculo.drive();
    // Esta condición es un type guard que permite saber si vehiculo es de tipo Camion
    if (vehiculo instanceof Camion) {
        vehiculo.loadCargo(1000);
    }
}

useVehiculo(vehiculo1); // Conducir coche...
useVehiculo(vehiculo2); // Conducir camión... Cargar 1000 kg