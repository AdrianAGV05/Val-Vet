import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-alimentos-nupec',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './alimentos-nupec.html',
  styleUrl: './alimentos-nupec.css',
})
export class AlimentosNupec {
  productos = [
    {
      nombre: 'Nupec Adulto Perro',
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Alimento completo y balanceado que ayuda a mantener a los perros adultos activos y con una masa muscular magra y saludable.',
      beneficios: [
        'Ingredientes altamente digestibles',
        'Promueve un pelaje brillante y piel saludable',
        'Óptima consistencia de heces'
      ],
      imagen: '/assets/nupec-adulto-rg.png'
    },
    {
      nombre: 'Nupec Cachorro',
      categoria: 'Perros',
      etapa: 'Cachorro',
      descripcion: 'Diseñado científicamente para aportar el balance nutricional óptimo que requiere un cachorro para su desarrollo y crecimiento fuerte.',
      beneficios: [
        'Refuerza el sistema inmunológico',
        'Desarrollo cerebral y visual (con DHA y EPA)',
        'Alta palatabilidad y croqueta adecuada'
      ],
      imagen: '/assets/nupec-cachorro-rp.jpg'
    },
    {
      nombre: 'Nupec Senior',
      categoria: 'Perros',
      etapa: 'Maduro',
      descripcion: 'Fórmula especializada para perros de edad avanzada que previene el desgaste articular y facilita la digestión con croquetas blandas.',
      beneficios: [
        'Contiene glucosamina y condroitina',
        'Fácil masticación',
        'Conservadores naturales'
      ],
      imagen: '/assets/nupec-senior.jpg'
    },
    {
      nombre: 'Nupec Weight Control',
      categoria: 'Perros',
      etapa: 'Control de Peso',
      descripcion: 'Ideal para perros propensos al sobrepeso o de actividad física baja, ayudándoles a reducir grasa corporal manteniendo la masa muscular.',
      beneficios: [
        'Bajo en calorías y grasas',
        'Alto contenido de fibra dietética',
        'Satisface el apetito por más tiempo'
      ],
      imagen: '/assets/nupec-wc.jpg'
    },
    {
      nombre: 'Nupec Sensitive Perro',
      categoria: 'Perros',
      etapa: 'Cuidado Especial',
      descripcion: 'Especialmente formulado para perros con piel sensible, alergias alimenticias o intolerancias estomacales severas.',
      beneficios: [
        'Proteína hidrolizada y fuente alternativa de carbohidratos',
        'Reduce la irritación cutánea',
        'Fórmula hipoalergénica'
      ],
      imagen: '/assets/nupec-sensitive.jpg'
    },
    {
      nombre: 'Nupec Felino Adulto',
      categoria: 'Gatos',
      etapa: 'Adulto',
      descripcion: 'Nutrición científica que satisface el exigente paladar felino y ayuda a mantener el tracto urinario saludable y prevenir bolas de pelo.',
      beneficios: [
        'Control de pH urinario',
        'Fibras naturales para reducir bolas de pelo',
        'Proteínas premium para músculos fuertes'
      ],
      imagen: '/assets/nupec-felino.jpg'
    }
  ];
}
