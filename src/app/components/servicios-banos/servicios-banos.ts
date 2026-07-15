import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeader } from '../main-header/main-header';
import { PieDePagina } from '../pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-servicios-banos',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './servicios-banos.html',
  styleUrl: './servicios-banos.css',
})
export class ServiciosBanos {
  servicios = [
    {
      nombre: 'Baño General y Secado',
      tipo: 'Servicio Básico',
      duracion: '45 a 90 minutos',
      descripcion: 'Higiene profunda y refrescante para mantener limpia a tu mascota. Elimina suciedad y malos olores mediante productos de calidad profesional.',
      incluye: [
        'Baño con agua templada y shampoo de limpieza profunda',
        'Limpieza externa de oídos',
        'Secado completo con toalla y secador profesional',
        'Cepillado básico de pelaje',
        'Corte de uñas',
        'Limpieza de glandulas anales',
        'Precio:Talla chica:$180 Talla mediana:$240 Talla grande:$300 Talla jumbo:$360'



      ],
      imagen: '/assets/banonormal.jpg'
    },
    {
      nombre: 'Baño Medicado o Hipoalergénico',
      tipo: 'Cuidado Dermatológico',
      duracion: '60 a 90 minutos',
      descripcion: 'Recomendado para mascotas con problemas en la piel, dermatitis, comezón o alergias. Se emplean productos terapéuticos especializados.',
      incluye: [
        'Baño con shampoo dermatológico específico para el problema',
        'Tiempo de reposo de 10 minutos para absorción del biológico',
        'Enjuague minucioso con agua templada',
        'Secado a temperatura controlada para no irritar la piel',
        'Corte de uñas',
        'Limpieza de glandulas anales',
        'Precio:Talla chica:$220 Talla mediana:$280 Talla grande:$340'



      ],
      imagen: '/assets/banodermatologico.png'
    },
    {
      nombre: 'Baño Antiparasitario (Eliminación Activa)',
      tipo: 'Tratamiento Preventivo',
      duracion: '60 a 90 minutos',
      descripcion: 'Ideal para eliminar al instante pulgas, garrapatas y piojos. Ayuda a detener la infestación activa en el cuerpo de tu mascota de forma segura.',
      incluye: [
        'Baño con jabón o shampoo insecticida de amplio espectro',
        'Inspección y remoción manual de parásitos externos',
        'Secado a temperatura controlada para no irritar la piel',
        'Recomendaciones para el control de plagas en casa',
        'Corte de uñas',
        'Limpieza de glandulas anales',
        'Precio:Talla chica:$220 Talla mediana:$280 Talla grande:$340'


      ],
      imagen: '/assets/scabisin.png'
    },
    /*
    {
      nombre: 'Baño Hidratante de Avena y Masaje',
      tipo: 'Spa Premium',
      duracion: '60 a 90 minutos',
      descripcion: 'Tratamiento restaurador diseñado para nutrir el pelo seco y deshidratado. Aporta una suavidad excepcional y brillo natural al pelaje.',
      incluye: [
        'Baño con shampoo y acondicionador enriquecido con extracto de avena',
        'Masaje relajante de 5 minutos durante el baño',
        'Secado profesional y cepillado desenredante',
        'Perfume aromaterapia de larga duración',
        'Corte de uñas',
        'Limpieza de glandulas anales'

      ],
      imagen: '/assets/bano-perro.png'
    }*/
  ];
}
