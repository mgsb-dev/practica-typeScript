import { personaUno, personaDos, personaTres } from "./Dummy/DummyPersona";
import { Persona } from "./Classes/Persona";
import { Direccion } from "./Classes/Direccion";
import { Mail } from "./Classes/Mail";
import { Telefono } from "./Classes/Telefono";

const personas: Persona[] = [personaUno, personaDos, personaTres];

//  Supongamos que la persona que queremos modificar tiene el DNI '123456789A'

let personaAEditar: Persona | undefined;
for (const persona of personas) {
  if (persona.dni === "12345678A") {
    personaAEditar = persona;
    break;
  }
}

const generarDireccion = (
  calle: string,
  numero: number,
  codigoPostal: string,
  poblacion: string,
  provincia: string,
  piso: number,
  letra: string
): Direccion => {
  return new Direccion(
    calle,
    numero,
    codigoPostal,
    poblacion,
    provincia,
    piso,
    letra
  );
};

const generarEmail = (tipo: string, direccion: string): Mail => {
  return new Mail(tipo, direccion);
};

const generarTelefono = (tipo: string, telefono: string): Telefono => {
  return new Telefono(tipo, telefono);
};


if (personaAEditar) {
  const nuevaDireccion = generarDireccion(
    "Calle Nueva",
    71,
    "78901",
    "Antequera",
    "Málaga",
    3,
    "D"
  );

  const nuevoMail = generarEmail(
    "Personal",
    "correo-nuevo-personal@example.com"
  );

  const nuevoTelefono = generarTelefono("Móvil", "676767676");

  personaAEditar.addNuevaDireccion(nuevaDireccion);
  personaAEditar.addNuevoMail(nuevoMail);
  personaAEditar.addNuevoTelefono(nuevoTelefono);

  console.log("Registro de Persona modificada:", personaAEditar);
} else {
  console.log("No se encontró ninguna persona con el DNI especificado.");
}

console.log("Registro de Persona Uno:", personaUno);
console.log("Registro de Persona Dos:", personaDos);
console.log("Registro de Persona Tres:", personaTres);
