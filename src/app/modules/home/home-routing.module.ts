import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminUserComponent } from '../usuarios/admin-user/admin-user.component';
import { InventarioComponent } from '../inventario/inventario.component';
import { DomicilioComponent } from '../domicilio/domicilio.component';
import { ProveedorComponent } from '../proveedores/proveedor/proveedor.component';
import { FinanzasComponent } from '../finanzas/finanzas.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'usuario',
                component: AdminUserComponent
            },
            {
                path: 'inventario',
                component: InventarioComponent
            },
            {
                path: 'domicilio',
                component: DomicilioComponent
            },
            {
                path: 'proveedor',
                component: ProveedorComponent
            },
            {
                path: 'finanzas',
                component: FinanzasComponent
            },


        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
