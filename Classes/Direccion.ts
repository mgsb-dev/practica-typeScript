export class Direccion {
  public calle: string;
  public numero: number;
  public piso: number;
  public letra: string;
  public codigoPostal: string;
  public poblacion: string;
  public provincia: string;

  constructor(
    calle: string,
    numero: number,
    codigoPostal: string,
    poblacion: string,
    provincia: string,
    piso: number,
    letra: string
  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }
}
