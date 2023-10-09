import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { DomicilioComponent } from './modules/domicilio/domicilio.component';
import { InventarioComponent } from './modules/inventario/inventario.component';
import { ProveedorComponent } from './modules/proveedores/proveedor/proveedor.component';
import { FinanzasComponent } from './modules/finanzas/finanzas.component';
import { UserModule } from './modules/usuarios/user.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DomicilioComponent,
    InventarioComponent,
    ProveedorComponent,
    FinanzasComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
