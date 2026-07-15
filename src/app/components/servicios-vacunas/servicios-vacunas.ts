import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-servicios-vacunas',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './servicios-vacunas.html',
  styleUrl: './servicios-vacunas.css',
})
export class ServiciosVacunas {
  vacunas = [
    {
      nombre: 'Vacuna Puppy DP',
      especie: 'Perros',
      edadRecomendada: '6 a 8 semanas',
      frecuencia: 'Primera dosis de cachorro',
      descripcion: 'Vacuna esencial de inicio para cachorros. Brinda protección crucial y oportuna contra el Moquillo (Distemper) y la Parvovirosis canina.',
      proteccion: [
        'Parvovirus Canino',
        'Moquillo Canino (Distemper)',
        'Parainfluenza',
        'Adenovirus Tipo 2',
        'Precio: $420'

      ],
      imagen: '/assets/vacunapuppy.png'
    },
    {
      nombre: 'Vacuna Quintuple',
      especie: 'Perros',
      edadRecomendada: 'A partir de las 10 semanas',
      frecuencia: 'Refuerzo de vacuna puppy',
      descripcion: 'Vacuna de amplio espectro para la protección integral del perro frente a las principales enfermedades infectocontagiosas.',
      proteccion: [
        'Parvovirus Canino',
        'Moquillo Canino (Distemper)',
        'Parainfluenza',
        'Adenovirus Tipo 2',
        'Leptospirosis',
        'Coronavirus',
        'Precio: $520'


      ],
      imagen: '/assets/vacunaquintuple.png'
    },
    {
      nombre: 'Vacuna Sextuple ',
      especie: 'Perros',
      edadRecomendada: 'A partir de las 12 semanas',
      frecuencia: 'Anual o semestral (según estilo de vida)',
      descripcion: 'Vacuna de amplio espectro para la protección integral del perro frente a las principales enfermedades infectocontagiosas.',
      proteccion: [
        'Parvovirus Canino',
        'Moquillo Canino (Distemper)',
        'Parainfluenza',
        'Adenovirus Tipo 2',
        'Leptospirosis',
        'Coronavirus',
        'Rabia',
        'Precio: $620'


      ],
      imagen: '/assets/vacunasextuple.png'
    },
    {
      nombre: 'Vacuna Triple Felina (FVRCP)',
      especie: 'Gatos',
      edadRecomendada: 'A partir de las 8 semanas',
      frecuencia: 'Refuerzo anual',
      descripcion: 'Vacuna básica y obligatoria para todos los felinos domésticos. Protege contra los virus respiratorios y entéricos más peligrosos.',
      proteccion: [
        'Rinotraqueitis viral felina',
        'Calicivirus felino',
        'Panleucopenia felina',
        'Precio: $380'
      ],
      imagen: '/assets/vacunatriplefelina.jpg '
    },
    {
      nombre: 'Vacuna contra Leucemia Felina (FeLV)',
      especie: 'Gatos',
      edadRecomendada: 'A partir de las 8 semanas (previo test negativo)',
      frecuencia: 'Refuerzo anual (gatos con acceso al exterior)',
      descripcion: 'Altamente recomendada para felinos que conviven con otros gatos o salen al exterior. Requiere una prueba rápida diagnóstica negativa previa a su aplicación.',
      proteccion: [
        'Virus de la Leucemia Felina',
        'Precio: $380'
      ],
      imagen: '/assets/vacunaleucemia.jpg'
    },
    {
      nombre: 'Vacuna Antirrabica',
      especie: 'Perros y Gatos',
      edadRecomendada: 'A partir de los 4 meses',
      frecuencia: 'Anual (Obligatoria por ley)',
      descripcion: 'Vacuna obligatoria de salud pública nacional que previene la transmisión de la rabia. Indispensable para viajar y convivir de forma segura.',
      proteccion: [
        'Virus de la Rabia',
        'Precio: $250'
      ],
      imagen: '/assets/vacunarabia.png'
    },
    {
      nombre: 'Vacuna Bordetella',
      especie: 'Perros y Gatos',
      edadRecomendada: 'A partir de los 4 meses',
      frecuencia: 'Anual (Temporada de frios)',
      descripcion: 'Protege contra la traqueobronquitis infecciosa canina, altamente contagiosa en lugares con alta concentración de perros (parques, pensiones, estéticas).',
      proteccion: [
        'Traqueobronquitis Infecciosa Canina',
        'Precio: $380'

      ],
      imagen: '/assets/vacunabordetella.jpg'
    }
  ];
}
