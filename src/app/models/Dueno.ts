import { Mascota } from "./mascota";

export class Dueno{
    constructor(
        public id: string,
        public nombre: string,
        public mascotas: Mascota[],
        public correo: string,
        public direccion: string,
        public telefono: string,
        public telefono2: string,
    

    ){}
}