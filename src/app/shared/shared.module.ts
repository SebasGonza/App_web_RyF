import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SidebarComponent, NotFoundComponent, BodyComponent, CardComponent],
  exports: [SidebarComponent, NotFoundComponent, BodyComponent, CardComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule { }
