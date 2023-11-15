import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './modules/usuarios/admin-user/admin-user.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { authenticationGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule), canMatch: [authenticationGuard()]
  },
  {
    path: 'usuario', component: AdminUserComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
