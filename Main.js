"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DummyPersona_1 = require("./Dummy/DummyPersona");
var Direccion_1 = require("./Classes/Direccion");
var Mail_1 = require("./Classes/Mail");
var Telefono_1 = require("./Classes/Telefono");
var personas = [DummyPersona_1.personaUno, DummyPersona_1.personaDos, DummyPersona_1.personaTres];
//  Supongamos que la persona que queremos modificar tiene el DNI '123456789A'
var personaAEditar;
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var persona = personas_1[_i];
    if (persona.dni === "12345678A") {
        personaAEditar = persona;
        break;
    }
}
var generarDireccion = function (calle, numero, codigoPostal, poblacion, provincia, piso, letra) {
    return new Direccion_1.Direccion(calle, numero, codigoPostal, poblacion, provincia, piso, letra);
};
var generarEmail = function (tipo, direccion) {
    return new Mail_1.Mail(tipo, direccion);
};
var generarTelefono = function (tipo, telefono) {
    return new Telefono_1.Telefono(tipo, telefono);
};
console.log("persona-->", personaAEditar);
if (personaAEditar) {
    var nuevaDireccion = generarDireccion("Calle Nueva", 71, "78901", "Antequera", "Málaga", 3, "D");
    var nuevoMail = generarEmail("Personal", "correo-nuevo-personal@example.com");
    var nuevoTelefono = generarTelefono("Móvil", "676767676");
    personaAEditar.addNuevaDireccion(nuevaDireccion);
    personaAEditar.addNuevoMail(nuevoMail);
    personaAEditar.addNuevoTelefono(nuevoTelefono);
    console.log("Registro de Persona modificada:", personaAEditar);
}
else {
    console.log("No se encontró ninguna persona con el DNI especificado.");
}
console.log("Registro de Persona 1:", DummyPersona_1.personaUno);
console.log("Registro de Persona 2:", DummyPersona_1.personaDos);
console.log("Registro de Persona 3:", DummyPersona_1.personaTres);
