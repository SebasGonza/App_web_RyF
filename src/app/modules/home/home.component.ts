import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from 'src/app/core/models/sidebarToggle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isThisSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth,
    this.isThisSideNavCollapsed = data.collapsed
  }

}
