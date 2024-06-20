var Usuario = /** @class */ (function () {
    function Usuario(n, a) {
        this.name = n;
        if (a) {
            this.age = a;
        }
    }
    Usuario.prototype.greet = function () {
        if (this.age) {
            console.log("Hola, mi nombre es ".concat(this.name, " y tengo ").concat(this.age, " a\u00F1os."));
        }
        else {
            console.log("Hola, mi nombre es ".concat(this.name, "."));
        }
    };
    return Usuario;
}());
var usuario1 = new Usuario('Juan', 25);
var usuario2 = new Usuario('Pedro');
usuario1.greet(); // Hola, mi nombre es Juan y tengo 25 años.
usuario2.greet(); // Hola, mi nombre es Pedro.
