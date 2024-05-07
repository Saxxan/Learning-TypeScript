var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASES ABSTRACTAS
// Las clases abstractas no se pueden instanciar solo pueden ser heredadas
var Persona = /** @class */ (function () {
    // Inicialización de la clase
    function Persona(name, age) {
        this.nombre = name;
        this.edad = age;
        this.hobbies = [];
    }
    // Método que añade un hobbie al array de hobbies
    Persona.prototype.añadirHobbie = function (hobbie) {
        this.hobbies.push(hobbie);
    };
    // Método que borra un hobbie del array de hobbies
    Persona.prototype.borrarHobbie = function (hobbie) {
        this.hobbies = this.hobbies.filter(function (h) { return h !== hobbie; });
    };
    // Método que devuelve los hobbies
    Persona.prototype.mostrarHobbies = function () {
        return this.hobbies;
    };
    return Persona;
}());
// SEGUNDA CLASE (HERENCIA)
var Niño = /** @class */ (function (_super) {
    __extends(Niño, _super);
    function Niño(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Object.defineProperty(Niño.prototype, "escuela", {
        // GETTER Y SETTER son métodos que con el mismo nombre puedes modificar o leer propiedades
        // Si no pones argumentos te devuelve el valor, si lo pones lo modifica
        get: function () {
            return this.school;
        },
        set: function (school) {
            this.school = school;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos
    Niño.prototype.mostrar = function () {
        return "".concat(this.nombre, " y va a al ").concat(this.school);
    };
    return Niño;
}(Persona));
var niño1 = new Niño("Pepe", 10, "Colegio María Asunción");
niño1.añadirHobbie("Jugar al fútbol");
// Tests
console.log(niño1.mostrar());
console.log(niño1.mostrarHobbies());
console.log(niño1.escuela);
niño1.escuela = "Colegio San José";
console.log(niño1.escuela);
