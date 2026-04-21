import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

}
