import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../components/main-header/main-header';
import { PieDePagina } from '../components/pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-criadero-pastor',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './criadero-pastor.html',
  styleUrl: './criadero-pastor.css',
})
export class CriaderoPastor {

}
