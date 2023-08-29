import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BodyContentComponent } from './body-content/body-content.component';

@NgModule({
  declarations: [SidebarComponent, NotFoundComponent, BodyContentComponent],
  exports: [SidebarComponent, NotFoundComponent, BodyContentComponent,],
  imports: [CommonModule, RouterModule],
})
export class SharedModule { }
