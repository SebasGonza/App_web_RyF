import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { InventarioComponent } from './modules/inventario/inventario.component';
import { DomicilioComponent } from './modules/domicilio/domicilio.component';
import { ProveedorComponent } from './modules/proveedores/proveedor/proveedor.component';
import { FinanzasComponent } from './modules/finanzas/finanzas.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'home', component: HomeComponent },
  { path: 'usuario', loadChildren: () => import('./modules/usuarios/user.module').then(m => m.UserModule)},
  { path: 'inventario', component: InventarioComponent },
  { path: 'domicilio', component: DomicilioComponent },
  { path: 'proveedor', component: ProveedorComponent },
  { path: 'finanza', component: FinanzasComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
