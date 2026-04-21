import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Documento {
  nombre: string;
  fecha: string;
  tipo: string;
}

interface Proveedor {
  id: number;
  nombre: string;
  contacto: string;
  telefono: string;
  documentos: Documento[];
  expanded?: boolean;
}

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores {
  proveedores: Proveedor[] = [
    {
      id: 1,
      nombre: 'Zoetis',
      contacto: 'Claudia',
      telefono: '7226750206',
      documentos: [
        { nombre: 'Factura 001', fecha: '2023-10-01', tipo: 'Factura' },
        { nombre: 'Catálogo Vacunas', fecha: '2023-11-15', tipo: 'Catálogo' }
      ]
    },
    {
      id: 2,
      nombre: 'Nupec',
      contacto: 'Dante',
      telefono: '7222097035',
      documentos: [
        { nombre: 'Lista de Precios 2024', fecha: '2024-01-10', tipo: 'Lista' },
        { nombre: 'Factura 045', fecha: '2024-02-15', tipo: 'Factura' }
      ]
    },
    {
      id: 3,
      nombre: 'Integral',
      contacto: 'Veterinaria Integral',
      telefono: '7222759858',
      documentos: [
        { nombre: 'Factura 089', fecha: '2023-12-05', tipo: 'Factura' },
        { nombre: 'Contrato 2024', fecha: '2024-01-02', tipo: 'Contrato' }
      ]
    },
    {
      id: 4,
      nombre: 'Optimo',
      contacto: 'Dante',
      telefono: '7222097035',
      documentos: [
        { nombre: 'Catálogo Nutrición', fecha: '2023-09-20', tipo: 'Catálogo' }
      ]
    }
  ];

  toggleExpand(proveedor: Proveedor) {
    proveedor.expanded = !proveedor.expanded;
  }
}
