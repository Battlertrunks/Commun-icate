import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
})
export class NavSidebarComponent implements OnInit {
  @Input() navbarClicked: boolean = false;
  @Output() sidebarClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
