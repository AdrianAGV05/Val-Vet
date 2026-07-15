import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Documento {
  nombre: string;
  fecha: string;
  tipo: string;
  url?: string;
}

interface Proveedor {
  id: number;
  nombre: string;
  contacto: string;
  telefono: string;
  documentos: Documento[];
  expanded?: boolean;
}

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores {
  proveedores: Proveedor[] = [
    {
      id: 1,
      nombre: 'Zoetis',
      contacto: 'Claudia',
      telefono: '7226750206',
      documentos: [
        { nombre: 'Factura 001', fecha: '2023-10-01', tipo: 'Factura' },
        { nombre: 'Catálogo Vacunas', fecha: '2023-11-15', tipo: 'Catálogo' }
      ]
    },
    {
      id: 2,
      nombre: 'Nupec',
      contacto: 'Dante',
      telefono: '7222097035',
      documentos: [
        { nombre: 'Lista de Precios 2024', fecha: '2024-01-10', tipo: 'Lista' },
        { nombre: 'Factura 045', fecha: '2024-02-15', tipo: 'Factura' }
      ]
    },
    {
      id: 3,
      nombre: 'Integral',
      contacto: 'Veterinaria Integral',
      telefono: '7222759858',
      documentos: [
        { nombre: 'Factura 089', fecha: '2023-12-05', tipo: 'Factura' },
        { nombre: 'Contrato 2024', fecha: '2024-01-02', tipo: 'Contrato' }
      ]
    },
    {
      id: 4,
      nombre: 'Optimo',
      contacto: 'Dante',
      telefono: '7222097035',
      documentos: [
        { nombre: 'Catálogo Nutrición', fecha: '2023-09-20', tipo: 'Catálogo' }
      ]
    }
  ];

  showModal = false;
  isEditing = false;
  currentProveedorId: number | null = null;
  formNombre = '';
  formContacto = '';
  formTelefono = '';

  toggleExpand(proveedor: Proveedor) {
    proveedor.expanded = !proveedor.expanded;
  }

  openAddModal() {
    this.isEditing = false;
    this.currentProveedorId = null;
    this.formNombre = '';
    this.formContacto = '';
    this.formTelefono = '';
    this.showModal = true;
  }

  openEditModal(prov: Proveedor, event: Event) {
    event.stopPropagation(); // Evita expandir la fila
    this.isEditing = true;
    this.currentProveedorId = prov.id;
    this.formNombre = prov.nombre;
    this.formContacto = prov.contacto;
    this.formTelefono = prov.telefono;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveProveedor() {
    if (this.isEditing && this.currentProveedorId !== null) {
      const index = this.proveedores.findIndex(p => p.id === this.currentProveedorId);
      if (index !== -1) {
        this.proveedores[index].nombre = this.formNombre;
        this.proveedores[index].contacto = this.formContacto;
        this.proveedores[index].telefono = this.formTelefono;
      }
    } else {
      const newId = this.proveedores.length > 0 ? Math.max(...this.proveedores.map(p => p.id)) + 1 : 1;
      this.proveedores.push({
        id: newId,
        nombre: this.formNombre,
        contacto: this.formContacto,
        telefono: this.formTelefono,
        documentos: []
      });
    }
    this.closeModal();
  }

  onFileSelected(event: any, proveedor: Proveedor) {
    const file: File = event.target.files[0];
    if (file) {
      // Formatear la fecha actual (YYYY-MM-DD)
      const today = new Date();
      const dateStr = today.toISOString().split('T')[0];
      
      // Crear una URL local para poder visualizar el archivo sin subirlo a un servidor
      const fileUrl = URL.createObjectURL(file);
      
      // Extraer extensión para el tipo
      const extension = file.name.split('.').pop()?.toUpperCase() || 'DOCUMENTO';

      proveedor.documentos.push({
        nombre: file.name,
        fecha: dateStr,
        tipo: extension,
        url: fileUrl
      });
    }
    // Limpiar el input
    event.target.value = '';
  }

  viewDocument(doc: Documento) {
    if (doc.url) {
      window.open(doc.url, '_blank');
    } else {
      alert('Este es un documento de prueba y no tiene un archivo real asociado.');
    }
  }

  deleteDocument(proveedor: Proveedor, index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este documento?')) {
      proveedor.documentos.splice(index, 1);
    }
  }
}
