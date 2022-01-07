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
  frame: boolean = false;

  constructor(
    private nav: NavController,
  ) { }

  ngOnInit() {
    console.log('location', window.location.href);
    if (window.location.href == 'https://mforms-devel.horts.com.au/user-profile/superannuation-choice?frame=true' ||
      window.location.href == 'https://mforms-devel.horts.com.au/user-profile/bank-account?frame=true' ||
      window.location.href == 'https://mforms-devel.horts.com.au/user-profile/profile?frame=true') {
      this.frame = true;
    }
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    console.log('this.userDetails', this.userDetails);
  }

  onGoBack() {
    this.nav.back();
  }

  onLogOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  onUserProfile() {
    console.log('here');
  }

}
