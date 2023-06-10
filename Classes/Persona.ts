import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
  public nombre: string;
  public apellidos: string;
  public edad: number;
  public dni: string;
  public cumpleaños: Date;
  public colorFavorito: string;
  public sexo: string;
  public direcciones: Direccion[];
  public mails: Mail[];
  public telefonos: Telefono[];
  public notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleaños: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleaños = cumpleaños;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  public addNuevaDireccion(direccion: Direccion) {
    return this.direcciones.push(direccion);
  }

  public addNuevoMail(mail: Mail) {
    return this.mails.push(mail);
  }

  public addNuevoTelefono(telefono: Telefono) {
    return this.telefonos.push(telefono);
  }
}
