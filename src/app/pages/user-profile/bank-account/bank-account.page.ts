import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.page.html',
  styleUrls: ['./bank-account.page.scss'],
})
export class BankAccountPage implements OnInit {

  pName: String = 'Employee Bank Account Details';

  constructor() { }

  ngOnInit() {
  }

}
