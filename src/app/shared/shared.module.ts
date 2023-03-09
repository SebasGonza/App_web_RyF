import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [SidebarComponent, NotFoundComponent],
  exports: [SidebarComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule { }
