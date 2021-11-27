import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crane-add-form',
  templateUrl: './crane-add-form.page.html',
  styleUrls: ['./crane-add-form.page.scss'],
})
export class CraneAddFormPage implements OnInit {

  pName: String = 'Crane';

  constructor() { }

  ngOnInit() {
  }

}
