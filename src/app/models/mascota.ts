export class Mascota{
  constructor(
    public nombre: string,
    public especie: string,
    public fechaNacimiento: Date,
    public raza:string,
    public sexo: string,
    public microchip: number,
    public tamano: string,
    public color: string,
    public tatuaje: boolean,
    public id?: string,

    
  ){}
}