import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dueno } from '../../models/Dueno';
import { DuenoService } from '../../services/duenos';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-datos-duenos',
  imports: [FormsModule, CommonModule, PieDePagina],
  templateUrl: './datos-duenos.html',
  styleUrl: './datos-duenos.css',
})
export class DatosDuenos implements OnInit {
  constructor(private duenoService: DuenoService) { }
  public dueno: Dueno = new Dueno('', '', [], '', '', '', '',);
  public duenos: Dueno[] = [];
  public botonAccion: string = 'Registrar Dueño';

  ngOnInit(): void {
    this.leerDuenosDato();
  }
  leerDuenosDato() {
    throw new Error('Method not implemented.');

  }
  guardarDatosDueno() {

  }
}
