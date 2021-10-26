import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() pageName: string;

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() { }

  onGoBack() {
    this.nav.back();
  }

  onLogOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

}
