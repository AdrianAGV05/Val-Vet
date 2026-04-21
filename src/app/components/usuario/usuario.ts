import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-usuario',
  imports: [RouterModule, MainHeader, PieDePagina],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

}
