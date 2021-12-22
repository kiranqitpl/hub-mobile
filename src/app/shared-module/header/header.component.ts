import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() pageName: String;
  userDetails: any = '';

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() { 
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    console.log('this.userDetails',this.userDetails);
  }

  onGoBack() {
    this.nav.back();
  }

  onLogOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

}
