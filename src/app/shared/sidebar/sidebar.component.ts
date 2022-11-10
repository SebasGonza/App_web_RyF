import { Component } from '@angular/core';
import { navbarData } from './navbar-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor() {}

  collapsed: boolean = true;
  navData = navbarData;
}
