import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})

@HostListener('window:resize', ['$event'])

export class OnBoardingPage implements OnInit {

  pName: String = 'On Boarding';
  getScreenWidth: any;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.onResize(window);
  }

  onResize(event) {
    this.getScreenWidth = this.sharedService.resize(event);
  }

}
