import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SideNavToggle } from 'src/app/core/models/sidebarToggle';
import { navbarData, signOut } from '../../core/models/navbar-data';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;
  signOut = signOut;
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  
  closeSideBar(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  dirigir(path: String): void {
    this.router.navigate([path]);
  }

  logOut(): void {
    this.authService.logOut();
  }
}
