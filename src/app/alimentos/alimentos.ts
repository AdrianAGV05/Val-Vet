import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../components/main-header/main-header';
import { PieDePagina } from '../components/pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-alimentos',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.css',
})
export class Alimentos {

}
