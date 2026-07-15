import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-alimentos-proplan',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './alimentos-proplan.html',
  styleUrl: './alimentos-proplan.css',
})
export class AlimentosProplan {
  productos = [
    {
      nombre: 'Pro Plan Adulto OptiHealth',
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Alimento completo y balanceado formulado con carne fresca de pollo como ingrediente principal, ideal para mantener a los perros adultos en óptimas condiciones de salud.',
      beneficios: [
        'Ingredientes altamente digestibles para mayor absorción',
        'Promueve una piel sana y un pelaje brillante',
        'Ayuda a mantener los músculos fuertes y magros'
      ],
      imagen: '/assets/proplan-adulto.jpeg'
    },
    {
      nombre: 'Pro Plan Cachorro OptiStart',
      categoria: 'Perros',
      etapa: 'Cachorro',
      descripcion: 'Diseñado científicamente con calostro bovino para reforzar las defensas naturales y el sistema inmunológico del cachorro durante su etapa de crecimiento.',
      beneficios: [
        'Fortalece las defensas naturales activamente',
        'Desarrollo cerebral y de visión con DHA',
        'Promueve un crecimiento óptimo y saludable'
      ],
      imagen: '/assets/proplan-cachorro.jpg'
    },
    {
      nombre: 'Pro Plan Senior OptiAge',
      categoria: 'Perros',
      etapa: 'Maduro',
      descripcion: 'Formulado con aceites vegetales que proveen una fuente de energía alternativa para el cerebro, mejorando la agudeza mental en perros senior.',
      beneficios: [
        'Ayuda a mantener la actividad y lucidez mental',
        'Protege y fortalece las articulaciones claves',
        'Conservadores naturales e ingredientes selectos'
      ],
      imagen: '/assets/proplan-active.png'
    },
    {
      nombre: 'Pro Plan Sensitive Skin & Stomach',
      categoria: 'Perros',
      etapa: 'Cuidado Especial',
      descripcion: 'Fórmula especializada a base de salmón y arroz, ideal para perros adultos con sensibilidad digestiva o piel propensa a irritaciones.',
      beneficios: [
        'Salmón como fuente principal de proteína premium',
        'Fácil digestibilidad para estómagos delicados',
        'Reduce reacciones alérgicas cutáneas comunes'
      ],
      imagen: '/assets/proplan-stomach.jpg'
    },
    {
      nombre: 'Pro Plan Gato Adulto OptiRenal',
      categoria: 'Gatos',
      etapa: 'Adulto',
      descripcion: 'Nutrición de vanguardia para felinos, con una combinación especial de antioxidantes, aminoácidos y ácidos grasos que ayudan a proteger la salud renal.',
      beneficios: [
        'Tecnología OptiRenal para la protección de riñones',
        'Mantiene el tracto urinario en óptimo estado',
        'Excelente palatabilidad con sabor delicioso'
      ],
      imagen: '/assets/proplan-gato.jpg'
    },
    {
      nombre: 'Pro Plan Urinary Gato',
      categoria: 'Gatos',
      etapa: 'Cuidado Especial',
      descripcion: 'Especialmente formulado para ayudar a disolver los cálculos de estruvita y reducir el riesgo de reincidencia, promoviendo la salud de las vías urinarias.',
      beneficios: [
        'Ayuda a diluir y disolver cálculos urinarios',
        'Control preciso del pH y minerales urinarios',
        'Ingredientes altamente digeribles para felinos'
      ],
      imagen: '/assets/proplan-gato-ur.png'
    }
  ];
}
