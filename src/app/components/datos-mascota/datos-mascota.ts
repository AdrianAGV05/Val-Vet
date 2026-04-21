import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { FormsModule } from '@angular/forms'; // 
import { CommonModule } from '@angular/common';
import { MascotaService } from '../../services/mascota';

@Component({
  selector: 'app-datos-mascota',
  imports: [FormsModule, CommonModule],
  templateUrl: './datos-mascota.html',
  styleUrl: './datos-mascota.css',
})
export class DatosMascota implements OnInit{
constructor(private mascotaService: MascotaService){}
  public mascota: Mascota=new Mascota('','',new Date(),'','',0,'','',false);
  public mascotas: Mascota[]=[];
  public botonAccion: string='Registrar Mascota';
  ngOnInit(): void {
    this.leerMascotasDato();
  }
  guardarDatos(){ 
    if(this.mascota.id==''){
     this.mascotaService.addMascota(this.mascota)
      .subscribe((res)=>{
       console.log(res)
       this.leerMascotasDato();
     })
    }else{
      this.mascotaService.updateDatosMascota(this.mascota.id||'', this.mascota)
      .subscribe((res)=>{
        console.log(res)
        this.leerMascotasDato();
        this.botonAccion='Registrar Mascota'
      })
    }
    this.mascota=new Mascota('','',new Date(),'','',0,'','',false);
  }
  eliminarMascota(index:number){
    let mascotaBorrar:Mascota=this.mascotas[index]
    this.mascotaService.deleteDatosMascota(mascotaBorrar.id || '')
    .subscribe((res)=>{
      console.log(res)
      this.leerMascotasDato();
    })
  }
  editarMascota(index:number){
    this.mascota=this.mascotas[index]
    this.botonAccion='Actualizar Mascota'
  }
  
  leerMascotasDato(){
    this.mascotaService.getDatosMascota()
    .subscribe((res)=>{
      console.log(res)
      this.mascotas=res.body;
    })
  }
}


