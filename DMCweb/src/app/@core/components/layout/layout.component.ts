import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public menuItems: MenuItem[];

  constructor() { }

  public ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Projects',
        routerLink: '/projects'
      },
      {
        label: 'Profile',
        routerLink: '/profile'
      }
    ];
  }

}
