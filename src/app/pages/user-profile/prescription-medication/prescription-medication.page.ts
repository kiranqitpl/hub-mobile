import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prescription-medication',
  templateUrl: './prescription-medication.page.html',
  styleUrls: ['./prescription-medication.page.scss'],
})
export class PrescriptionMedicationPage implements OnInit {

  pName: String = 'Prescription medication';

  constructor(
    public nav: NavController
  ) { }

  ngOnInit() {
  }

  onSubmit(type){

  }

}
