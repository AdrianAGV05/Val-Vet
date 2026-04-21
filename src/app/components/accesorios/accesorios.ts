import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { Producto } from '../producto/producto';
import { DetalleProducto } from '../../models/detalle-producto';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-accesorios',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './accesorios.html',
  styleUrl: './accesorios.css',
})
export class Accesorios {

}
