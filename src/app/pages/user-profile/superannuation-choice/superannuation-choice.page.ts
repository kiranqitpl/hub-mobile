import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superannuation-choice',
  templateUrl: './superannuation-choice.page.html',
  styleUrls: ['./superannuation-choice.page.scss'],
})
export class SuperannuationChoicePage implements OnInit {

  pName: String = 'Superannuation Choice';
  paidTo: String = ''

  constructor() { }

  ngOnInit() {
  }

}
