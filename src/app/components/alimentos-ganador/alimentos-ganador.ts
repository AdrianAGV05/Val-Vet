import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-alimentos-ganador',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './alimentos-ganador.html',
  styleUrl: './alimentos-ganador.css',
})
export class AlimentosGanador {
  productos = [
    {
      nombre: 'Ganador Premium Adulto',
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Alimento completo y balanceado con un óptimo aporte de nutrientes que fortalece el sistema inmunológico y promueve un pelaje brillante.',
      beneficios: [
        'Antioxidantes para reforzar las defensas',
        'Extracto de Yucca para reducir el olor de las heces',
        'Prebióticos que optimizan la digestión diaria'
      ],
      imagen: '/assets/ganador-adulto-premium.png'
    },
    {
      nombre: 'Ganador Premium Cachorro',
      categoria: 'Perros',
      etapa: 'Cachorro',
      descripcion: 'Fórmula científica diseñada para cachorros en fase de crecimiento, proporcionando la energía, vitaminas y minerales para huesos fuertes.',
      beneficios: [
        'Enriquecido con DHA y EPA para desarrollo cognitivo',
        'Proteínas premium para músculos en desarrollo',
        'Croqueta con tamaño ideal y fácil masticación'
      ],
      imagen: '/assets/ganador-cachorro-premium.png'
    },
    {
      nombre: 'Ganador Adulto Razas Pequeñas',
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Formulado específicamente para los requerimientos energéticos elevados y el metabolismo rápido de los perros de razas pequeñas.',
      beneficios: [
        'Croquetas adaptadas para mandíbulas pequeñas',
        'Favorece la salud oral previniendo sarro',
        'Contiene ácidos grasos para piel y pelo sanos'
      ],
      imagen: '/assets/ganador-adulto.jpg'
    },
    {
      nombre: 'Ganador Cachorro',
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Combinación irresistible de croquetas con sabores a pollo y carne que aseguran una alimentación completa y placentera.',
      beneficios: [
        'Doble sabor altamente palatable',
        'Nutrición 100% balanceada y completa',
        'Contribuye a la vitalidad y energía del perro'
      ],
      imagen: '/assets/ganador-cachorro.jpg'
    },
    /*{
      nombre: 'Ganador Felino Adulto',
      categoria: 'Gatos',
      etapa: 'Adulto',
      descripcion: 'Alimento formulado para cubrir las necesidades especiales de los gatos adultos, apoyando el control de bolas de pelo y la salud urinaria.',
      beneficios: [
        'Fibras naturales para control de bolas de pelo',
        'Cuidado urinario manteniendo un pH equilibrado',
        'Adicionado con taurina para la salud cardíaca y visual'
      ],
      imagen: '/assets/Ganador.jpg'
    }*/
  ];
}
