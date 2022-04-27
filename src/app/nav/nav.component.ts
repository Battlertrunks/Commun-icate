import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  loggedIn: boolean = false;
  @Output() navbarClicked = false;

  constructor() {}

  ngOnInit(): void {}

  loggingIn() {
    this.loggedIn = !this.loggedIn;
  }

  sideBarToggle(toggle: boolean) {
    this.navbarClicked = toggle;
  }
}
