import { Routes } from '@angular/router';
import { DatosMascota } from './components/datos-mascota/datos-mascota';
import { DatosDuenos } from './components/datos-duenos/datos-duenos';
import { PaginaPrincipal } from './pagina-principal/pagina-principal';
import { Alimentos } from './alimentos/alimentos';
import { CriaderoPastor } from './criadero-pastor/criadero-pastor';
import { Accesorios } from './components/accesorios/accesorios';
import { Servicios } from './components/servicios/servicios';
import { Usuario } from './components/usuario/usuario';
import { Admin } from './components/admin/admin';
import { Clientes } from './components/clientes/clientes';
import { HistorialClinico } from './components/historial-clinico/historial-clinico';
import { Proveedores } from './components/proveedores/proveedores';


export const routes: Routes = [
    { path: 'admin', component: Admin },
    { path: 'mascota', component: DatosMascota },
    { path: 'duenos', component: DatosDuenos },
    { path: 'pagina-principal', component: PaginaPrincipal },
    { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
    { path: 'alimentos', component: Alimentos },
    { path: 'criadero-pastor', component: CriaderoPastor },
    { path: 'accesorios', component: Accesorios },
    { path: 'servicios', component: Servicios },
    { path: 'usuario', component: Usuario },
    { path: 'clientes', component: Clientes },
    { path: 'historial-clinico', component: HistorialClinico },
    { path: 'proveedores', component: Proveedores },
];
