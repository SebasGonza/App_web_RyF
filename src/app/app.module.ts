import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ProductoComponent } from './modules/producto/producto.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
import { VentasComponent } from './modules/ventas/ventas.component';
import { DomicilioComponent } from './modules/domicilio/domicilio.component';
import { InventarioComponent } from './modules/inventario/inventario.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';
import { FinanzasComponent } from './modules/finanzas/finanzas.component';

@NgModule({
  declarations: [AppComponent, ProductoComponent, ClienteComponent, VentasComponent, DomicilioComponent, InventarioComponent, ProveedorComponent, FinanzasComponent],
  imports: [
    BrowserModule,
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
