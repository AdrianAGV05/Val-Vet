import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Medicamento {
  numeroSerie: string;
  nombre: string;
  precioClinica: number;
  precioPublico: number;
  stock: number;
}

@Component({
  selector: 'app-listado-medicamentos',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './listado-medicamentos.html',
  styleUrl: './listado-medicamentos.css',
})
export class ListadoMedicamentos {
  medicamentos: Medicamento[] = [
    {
      numeroSerie: 'MED-001',
      nombre: 'Amoxicilina 500mg',
      precioClinica: 150.00,
      precioPublico: 250.00,
      stock: 120
    },
    {
      numeroSerie: 'MED-002',
      nombre: 'Ibuprofeno 400mg',
      precioClinica: 80.00,
      precioPublico: 150.00,
      stock: 85
    },
    {
      numeroSerie: 'MED-003',
      nombre: 'Desparasitante Plus',
      precioClinica: 450.00,
      precioPublico: 800.00,
      stock: 15
    },
    {
      numeroSerie: 'MED-004',
      nombre: 'Vitamina C',
      precioClinica: 120.00,
      precioPublico: 200.00,
      stock: 300
    }
  ];
}
