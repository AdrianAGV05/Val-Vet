import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Vacuna {
  nombre: string;
  enfermedad: string;
  fechaAplicacion: string;
  fechaRefuerzo: string;
  lote: string;
  veterinario: string;
  estado: 'Aplicada' | 'Programada' | 'Vencida';
}

interface MascotaVacunas {
  nombre: string;
  propietario: string;
  especie: string;
  raza: string;
  edad: string;
  peso: string;
  avatar: string;
  vacunas: Vacuna[];
}

@Component({
  selector: 'app-carnet-vacunacion',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './carnet-vacunacion.html',
  styleUrl: './carnet-vacunacion.css',
})
export class CarnetVacunacion {
  mascotas: MascotaVacunas[] = [
    {
      nombre: 'Akira',
      propietario: 'Adrian',
      especie: 'Perro',
      raza: 'Pastor Alemán',
      edad: '2 años',
      peso: '28 kg',
      avatar: 'A',
      vacunas: [
        { nombre: 'Parvovirus', enfermedad: 'Parvovirosis', fechaAplicacion: '2025-01-10', fechaRefuerzo: '2026-01-10', lote: 'PV-9821', veterinario: 'Dra. Ana Gómez', estado: 'Aplicada' },
        { nombre: 'Quíntuple', enfermedad: 'Distemper, Parvo, Adeno, Influenza', fechaAplicacion: '2025-02-15', fechaRefuerzo: '2026-02-15', lote: 'QT-1092', veterinario: 'Dr. Carlos Ruiz', estado: 'Aplicada' },
        { nombre: 'Rabia', enfermedad: 'Rabia', fechaAplicacion: '2025-03-20', fechaRefuerzo: '2026-03-20', lote: 'RB-0412', veterinario: 'Dra. Ana Gómez', estado: 'Aplicada' },
        { nombre: 'Bordetella', enfermedad: 'Tos de las perreras', fechaAplicacion: '2025-06-01', fechaRefuerzo: '2026-06-01', lote: 'BD-5561', veterinario: 'Dr. Carlos Ruiz', estado: 'Aplicada' }
      ]
    },
    {
      nombre: 'Sky',
      propietario: 'Omar Valdez Becerril',
      especie: 'Gato',
      raza: 'Siamés',
      edad: '1 año',
      peso: '4.5 kg',
      avatar: 'S',
      vacunas: [
        { nombre: 'Triple Felina', enfermedad: 'Calicivirus, Rinotraqueitis, Panleucopenia', fechaAplicacion: '2025-02-10', fechaRefuerzo: '2026-02-10', lote: 'TF-7721', veterinario: 'Dra. Ana Gómez', estado: 'Aplicada' },
        { nombre: 'Leucemia Felina', enfermedad: 'Leucemia', fechaAplicacion: '2025-03-10', fechaRefuerzo: '2026-03-10', lote: 'LF-8832', veterinario: 'Dr. Carlos Ruiz', estado: 'Aplicada' },
        { nombre: 'Rabia', enfermedad: 'Rabia', fechaAplicacion: '2025-04-15', fechaRefuerzo: '2026-04-15', lote: 'RB-0413', veterinario: 'Dra. Ana Gómez', estado: 'Aplicada' }
      ]
    },
    {
      nombre: 'Firulais',
      propietario: 'María López',
      especie: 'Perro',
      raza: 'Mestizo',
      edad: '3 años',
      peso: '15 kg',
      avatar: 'F',
      vacunas: [
        { nombre: 'Rabia', enfermedad: 'Rabia', fechaAplicacion: '2024-05-10', fechaRefuerzo: '2025-05-10', lote: 'RB-0410', veterinario: 'Dra. Ana Gómez', estado: 'Vencida' },
        { nombre: 'Parvovirus', enfermedad: 'Parvovirosis', fechaAplicacion: '2025-05-20', fechaRefuerzo: '2026-05-20', lote: 'PV-9828', veterinario: 'Dr. Carlos Ruiz', estado: 'Aplicada' }
      ]
    }
  ];

  selectedPetIndex = 0;
  showModal = false;

  formNombre = '';
  formEnfermedad = '';
  formFechaAplicacion = '';
  formFechaRefuerzo = '';
  formLote = '';
  formVeterinario = '';
  formEstado: 'Aplicada' | 'Programada' | 'Vencida' = 'Aplicada';

  get selectedPet(): MascotaVacunas {
    return this.mascotas[this.selectedPetIndex];
  }

  selectPet(index: number) {
    this.selectedPetIndex = index;
  }

  openAddModal() {
    const today = new Date().toISOString().split('T')[0];
    this.formNombre = '';
    this.formEnfermedad = '';
    this.formFechaAplicacion = today;
    this.formFechaRefuerzo = '';
    this.formLote = '';
    this.formVeterinario = 'Dra. Ana Gómez';
    this.formEstado = 'Aplicada';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveVacuna() {
    if (!this.formNombre || !this.formFechaAplicacion) {
      alert('Por favor, complete los campos obligatorios (Nombre y Fecha de Aplicación).');
      return;
    }

    this.selectedPet.vacunas.push({
      nombre: this.formNombre,
      enfermedad: this.formEnfermedad,
      fechaAplicacion: this.formFechaAplicacion,
      fechaRefuerzo: this.formFechaRefuerzo,
      lote: this.formLote,
      veterinario: this.formVeterinario,
      estado: this.formEstado
    });

    this.closeModal();
  }

  deleteVacuna(index: number) {
    if (confirm(`¿Estás seguro de que deseas eliminar la vacuna "${this.selectedPet.vacunas[index].nombre}" del historial de ${this.selectedPet.nombre}?`)) {
      this.selectedPet.vacunas.splice(index, 1);
    }
  }
}
