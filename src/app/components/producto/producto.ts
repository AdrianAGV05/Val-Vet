import { Component, Input, } from '@angular/core';
import { DetalleProducto } from '../../models/detalle-producto';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-producto',
  imports: [PieDePagina],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  @Input() productodetalle !: DetalleProducto;
}
