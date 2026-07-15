import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-servicios-desparasitaciones',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './servicios-desparasitaciones.html',
  styleUrl: './servicios-desparasitaciones.css',
})
export class ServiciosDesparasitaciones {
  tratamientos = [
    {
      nombre: 'Desparasitación Interna (Perros)',
      tipo: 'Perros',
      frecuencia: 'Cada 4 a 6 meses',
      descripcion: 'Eliminación de parásitos intestinales como áscaris, tenias y giardia. Esencial para la salud digestiva y para evitar el contagio a humanos.',
      incluye: [
        'Valoración del peso y condición del paciente',
        'Aplicación de antiparasitario oral de amplio espectro',
        'Registro del tratamiento en historial clínico',
        'Indicaciones de seguimiento y próxima dosis',
        'Precio: Talla chica: $120, Talla mediana: $200,Talla grande: $280, Talla jumbo:$340'
      ],
      imagen: '/assets/desparacitacionperros.png'
    },
    {
      nombre: 'Desparasitación Interna (Gatos)',
      tipo: 'Gatos',
      frecuencia: 'Cada 4 a 6 meses',
      descripcion: 'Tratamiento antiparasitario interno formulado específicamente para felinos, eliminando lombrices y otros helmintos de forma segura y eficaz.',
      incluye: [
        'Evaluación del peso y condición general del felino',
        'Desparasitante oral o pasta palatina según el caso',
        'Registro del tratamiento en historial clínico',
        'Indicaciones de seguimiento y próxima dosis',
        'Precio: Talla chica: $80, Talla mediana: $120,Talla grande: $150'

      ],
      imagen: '/assets/desparacitaciongatos.jpg'
    },
    {
      nombre: 'Desparasitación Externa - Antipulgas y Garrapatas',
      tipo: 'Perros',
      frecuencia: 'Mensual o según el producto indicado',
      descripcion: 'Protección contra ectoparásitos (pulgas, garrapatas y piojos) a través de pipetas o productos tópicos de larga duración aplicados por el veterinario.',
      incluye: [
        'Revisión del pelaje y detección de ectoparásitos activos',
        'Aplicación de antipulgas / antigarrapata tópico o inyectable',
        'Peine antiparásito y limpieza manual si es necesario',
        'Orientación sobre el control del ambiente doméstico',
        'Precio: $295 - $345 (según producto y peso)'
      ],
      imagen: '/assets/simparica.png'
    },
    {
      nombre: 'Paquete Completo: Interno + Externo',
      tipo: 'Perros ',
      frecuencia: 'Cada 5 semanas (recomendado)',
      descripcion: 'Paquete integral que combina la desparasitación interna con el tratamiento externo antipulgas y garrapatas, en una sola visita cómoda y segura.',
      incluye: [
        'Desparasitante interno oral de amplio espectro',
        'Antipulgas / antigarrapata tópico de larga duración',
        'Revisión general del estado de salud del paciente',
        'Registro y calendarización en historial clínico',
        'Precio: $360 - $445 (según el peso de la mascota)'
      ],
      imagen: '/assets/simparicatrio.jpg'
    },
    {
      nombre: 'Paquete Completo: Interno + Externo',
      tipo: 'Gatos',
      frecuencia: 'Cada 3 meses (recomendado)',
      descripcion: 'Paquete integral que combina la desparasitación interna con el tratamiento externo antipulgas y garrapatas, en una sola visita cómoda y segura.',
      incluye: [
        'Desparasitante interno oral de amplio espectro',
        'Antipulgas / antigarrapata tópico de larga duración',
        'Revisión general del estado de salud del paciente',
        'Registro y calendarización en historial clínico',
        'Precio: $325 - $340 (según el peso de la mascota)'
      ],
      imagen: '/assets/revolutionplus.jpg'
    }
  ];
}
