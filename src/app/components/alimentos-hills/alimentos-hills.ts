import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-alimentos-hills',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './alimentos-hills.html',
  styleUrl: './alimentos-hills.css',
})
export class AlimentosHills {
  productos = [
    {
      nombre: "Hill's Science Diet Adult Canine",
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Nutrición balanceada con precisión para marcar una diferencia visible en la salud y el bienestar de los perros adultos de 1 a 6 años de edad.',
      beneficios: [
        'Omega-6 y vitamina E para una piel y pelaje hermosos',
        'Proteína de alta calidad para mantener músculos magros',
        'Fibras naturales para una digestión sana y fácil'
      ],
      imagen: '/assets/Hills.jpg'
    },
    {
      nombre: "Hill's Science Diet Puppy Small Paws",
      categoria: 'Perros',
      etapa: 'Cachorro',
      descripcion: 'Nutrición diseñada a la medida para las necesidades de desarrollo de cachorros de razas pequeñas y miniatura para que tengan el mejor comienzo en la vida.',
      beneficios: [
        'DHA de aceite de pescado para un cerebro y ojos sanos',
        'Proteína premium para la construcción de músculos magros',
        'Mezcla de antioxidantes para soporte inmunológico de por vida'
      ],
      imagen: '/assets/Hills.jpg'
    },
    {
      nombre: "Hill's Science Diet Perfect Weight",
      categoria: 'Perros',
      etapa: 'Cuidado Especial',
      descripcion: 'Proporciona nutrición de vanguardia para el control del peso con tecnología clínicamente comprobada para lograr la pérdida segura del peso.',
      beneficios: [
        'Pérdida de peso segura con resultados en 10 semanas',
        'Mantenimiento sano del peso y soporte duradero',
        'Respaldo para la musculatura magra y articulaciones'
      ],
      imagen: '/assets/Hills.jpg'
    },
    {
      nombre: "Hill's Science Diet Adult Hairball Control",
      categoria: 'Gatos',
      etapa: 'Adulto',
      descripcion: 'Nutrición especialmente formulada para ayudar a evitar la formación de bolas de pelo en gatos adultos de 1 a 6 años de edad.',
      beneficios: [
        'Tecnología de fibra natural que reduce las bolas de pelo',
        'Proteína de alta calidad para músculos fuertes y delgados',
        'Ácidos grasos Omega-6 para una piel y pelaje sanos'
      ],
      imagen: '/assets/Hills.jpg'
    },
    {
      nombre: "Hill's Prescription Diet c/d Multicare",
      categoria: 'Gatos',
      etapa: 'Cuidado Especial',
      descripcion: 'Nutrición clínica especialmente formulada por nutricionistas y veterinarios para apoyar la salud urinaria y reducir la reincidencia de cálculos.',
      beneficios: [
        'Disuelve piedras de estruvita en tan solo 7 días',
        'Reduce el riesgo de piedras de estruvita y oxilato de calcio',
        'Formulado para promover un ambiente urinario saludable'
      ],
      imagen: '/assets/Hills.jpg'
    }
  ];
}
