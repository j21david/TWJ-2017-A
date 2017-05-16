/**
 * Created by USRDEL on 16/5/17.
 */
//tipos de datops en typeScript
var holaMundo = "\n\nhola\ncabezon\n\n\n";
console.log(holaMundo);
var isDone = true;
var hex = 5;
var novias = 12;
var hola = "wr'wrw'wr";
var frase = "EL numero sdasd ${novias}";
var notas = [4, 43, 3, 3, 3, 5, 3, 3, 3, 3];
var tupla = ["asd", 23];
var notSure = 4;
var usuario = {
    nombre: "dasd",
    apellido: "dada"
};
var persona = (function () {
    function persona(nombre, apellido, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = new Date();
    }
    persona.prototype.imprimirPersona = function () {
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.fechaNacimiento);
    };
    return persona;
}());
var adrian = new persona("jose", "david", new Date);
adrian.imprimirPersona();
