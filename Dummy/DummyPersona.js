"use strict";
// En el archivo Main.ts, puedes importar los datos falsos del archivo dummy y utilizarlos al crear los registros de personas:
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaTres = exports.personaDos = exports.personaUno = void 0;
// typescript
// Copy code
var Persona_1 = require("../Classes/Persona");
var DummyData_1 = require("./DummyData");
var personaUno = new Persona_1.Persona("NombreUno", "Apellidos Uno", 28, "12345678A", new Date(1993, 5, 5), "Rojo", "Mujer", DummyData_1.dummyDirecciones.slice(0, 2), DummyData_1.dummyMails.slice(0, 2), DummyData_1.dummyTelefonos.slice(0, 2), "Notas Uno");
exports.personaUno = personaUno;
var personaDos = new Persona_1.Persona("NombreDos", "Apellidos Dos", 35, "23456789B", new Date(1987, 4, 10), "Azul", "Hombre", DummyData_1.dummyDirecciones.slice(2, 4), DummyData_1.dummyMails.slice(2, 4), DummyData_1.dummyTelefonos.slice(2, 4), "Notas Dos");
exports.personaDos = personaDos;
var personaTres = new Persona_1.Persona("NombreTres", "Apellidos Tres", 28, "98765432C", new Date(2005, 8, 25), "Rojo", "Mujer", DummyData_1.dummyDirecciones.slice(4, -1), DummyData_1.dummyMails.slice(4, -1), DummyData_1.dummyTelefonos.slice(4, -1), "Notas Tres");
exports.personaTres = personaTres;
