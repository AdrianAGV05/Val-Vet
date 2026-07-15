import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-servicios-esteticas',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './servicios-esteticas.html',
  styleUrl: './servicios-esteticas.css',
})
export class ServiciosEsteticas {
  servicios = [
    {
      nombre: 'Estética  Canina ',
      tipo: 'Perro Chico',
      duracion: '1 a 2 horas',
      descripcion: 'Higiene y mantenimiento esencial para tu mascota. Incluye corte, baño, secado y cepillado profundo para mantener su pelaje libre de suciedad.',
      incluye: [
        'Baño con agua templada',
        'Corte de pelo',
        'Secado manual profesional y cepillado',
        'Limpieza delicada de oídos y drenado de glándulas',
        'Corte de uñas y perfumado',
        'Precio: $300'
      ],
      imagen: '/assets/estetica-canina.jpg'
    },
    {
      nombre: 'Estetica Canina',
      tipo: 'Perro mediano',
      duracion: '2 a 3 horas',
      descripcion: 'Higiene y mantenimiento esencial para tu mascota. Incluye corte, baño, secado y cepillado profundo para mantener su pelaje libre de suciedad.',
      incluye: [
        'Baño con agua templada',
        'Corte de pelo',
        'Secado manual profesional y cepillado',
        'Limpieza delicada de oídos y drenado de glándulas',
        'Corte de uñas y perfumado',
        'Precio: $345'
      ],
      imagen: '/assets/estetica-perro-mediano.jpg'
    },
    {
      nombre: 'Estetica Canina',
      tipo: 'Perro Grande',
      duracion: '2 a 3 horas',
      descripcion: 'Higiene y mantenimiento esencial para tu mascota. Incluye corte, baño, secado y cepillado profundo para mantener su pelaje libre de suciedad.',
      incluye: [
        'Baño con agua templada',
        'Corte de pelo',
        'Secado manual profesional y cepillado',
        'Limpieza delicada de oídos y drenado de glándulas',
        'Corte de uñas y perfumado',
        'Precio: $385'
      ],
      imagen: '/assets/estetica-perro-grande.png'
    },
    {
      nombre: 'Estetica Canina',
      tipo: 'Perro Jumbo',
      duracion: '3 a 4 horas',
      descripcion: 'Higiene y mantenimiento esencial para tu mascota. Incluye corte, baño, secado y cepillado profundo para mantener su pelaje libre de suciedad.',
      incluye: [
        'Baño con agua templada',
        'Corte de pelo',
        'Secado manual profesional y cepillado',
        'Limpieza delicada de oídos y drenado de glándulas',
        'Corte de uñas y perfumado',
        'Precio: $425'
      ],
      imagen: '/assets/estetica-perro-jumbo.jpg'
    }
  ];
}
