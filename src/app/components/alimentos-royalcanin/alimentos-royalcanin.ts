import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-alimentos-royalcanin',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './alimentos-royalcanin.html',
  styleUrl: './alimentos-royalcanin.css',
})
export class AlimentosRoyalCanin {
  productos = [
    {
      nombre: 'Royal Canin Puppy Mini',
      categoria: 'Perros',
      etapa: 'Cachorro',
      descripcion: 'Nutrición precisa para cachorros de razas pequeñas (hasta 10 kg de peso adulto) hasta los 10 meses de edad, aportando la energía necesaria para un rápido crecimiento.',
      beneficios: [
        'Satisface las elevadas necesidades energéticas',
        'Favorece una microbiota intestinal equilibrada',
        'Ayuda a construir defensas fuertes en desarrollo'
      ],
      imagen: '/assets/Royal Canin.png'
    },
    {
      nombre: 'Royal Canin Adulto Medium',
      categoria: 'Perros',
      etapa: 'Adulto',
      descripcion: 'Formulado específicamente para cubrir las altas necesidades energéticas y de protección inmune en perros adultos de razas medianas (11 a 25 kg).',
      beneficios: [
        'Complejo de antioxidantes que refuerza defensas',
        'Excelente digestibilidad y absorción de nutrientes',
        'Enriquecido con EPA-DHA para el cuidado de piel y pelo'
      ],
      imagen: '/assets/Royal Canin.png'
    },
    {
      nombre: 'Royal Canin Yorkshire Terrier Adult',
      categoria: 'Perros',
      etapa: 'Raza Específica',
      descripcion: 'Alimento a la medida que cubre las necesidades biológicas particulares del Yorkshire Terrier, cuidando la calidad de su pelo y previniendo problemas dentales.',
      beneficios: [
        'Nutrientes específicos para un pelaje largo y sedoso',
        'Satisface apetitos exigentes con sabores y aromas selectos',
        'Croqueta con efecto cepillado para reducir el sarro'
      ],
      imagen: '/assets/Royal Canin.png'
    },
    {
      nombre: 'Royal Canin Gastrointestinal Perro',
      categoria: 'Perros',
      etapa: 'Cuidado Especial',
      descripcion: 'Alimento dietético de alta digestibilidad formulado para perros con trastornos agudos o crónicos de la absorción intestinal.',
      beneficios: [
        'Fórmula altamente digestible con fibras balanceadas',
        'Alta densidad energética para reducir el volumen de la comida',
        'Gran palatabilidad para estimular el apetito disminuido'
      ],
      imagen: '/assets/Royal Canin.png'
    },
    {
      nombre: 'Royal Canin Kitten',
      categoria: 'Gatos',
      etapa: 'Cachorro',
      descripcion: 'Nutrición de alta gama para gatitos en su segunda etapa de crecimiento (de 4 a 12 meses), apoyando su desarrollo cerebral e inmunitario.',
      beneficios: [
        'Refuerzo del sistema inmunológico con vitaminas C y E',
        'Combinación de prebióticos para la salud digestiva',
        'Croqueta pequeña y blanda para mandíbulas en desarrollo'
      ],
      imagen: '/assets/Royal Canin.png'
    },
    {
      nombre: 'Royal Canin Renal Felino',
      categoria: 'Gatos',
      etapa: 'Cuidado Especial',
      descripcion: 'Soporte nutricional formulado para ayudar a la función renal de gatos adultos con insuficiencia renal crónica o lesión renal temporal.',
      beneficios: [
        'Bajo contenido de fósforo y proteínas de alta calidad',
        'Perfil aromático específico y sabor muy atractivo',
        'Aporte energético adaptado para porciones pequeñas'
      ],
      imagen: '/assets/Royal Canin.png'
    }
  ];
}
