// En el archivo Main.ts, puedes importar los datos falsos del archivo dummy y utilizarlos al crear los registros de personas:

// typescript
// Copy code
import { Persona } from "../Classes/Persona";
import { dummyDirecciones, dummyMails, dummyTelefonos } from "./DummyData";

const personaUno = new Persona(
  "NombreUno",
  "Apellidos Uno",
  28,
  "12345678A",
  new Date(1993, 5, 5),
  "Rojo",
  "Mujer",
  dummyDirecciones.slice(0, 2),
  dummyMails.slice(0, 2),
  dummyTelefonos.slice(0, 2),
  "Notas Uno"
);

const personaDos = new Persona(
  "NombreDos",
  "Apellidos Dos",
  35,
  "23456789B",
  new Date(1987, 4, 10),
  "Azul",
  "Hombre",
  dummyDirecciones.slice(2, 4),
  dummyMails.slice(2, 4),
  dummyTelefonos.slice(2, 4),
  "Notas Dos"
);

const personaTres = new Persona(
  "NombreTres",
  "Apellidos Tres",
  28,
  "98765432C",
  new Date(2005, 8, 25),
  "Rojo",
  "Mujer",
  dummyDirecciones.slice(4, -1),
  dummyMails.slice(4, -1),
  dummyTelefonos.slice(4, -1),
  "Notas Tres"
);

export { personaUno, personaDos, personaTres };
