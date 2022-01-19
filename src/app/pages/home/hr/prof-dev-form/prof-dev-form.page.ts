import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-dev-form',
  templateUrl: './prof-dev-form.page.html',
  styleUrls: ['./prof-dev-form.page.scss'],
})
export class ProfDevFormPage implements OnInit {

  pName:String = 'Professional Developement Application';

  constructor() { }

  ngOnInit() {
  }

}
