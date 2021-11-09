import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from '../../services/global-service/global.service'

@Component({
  selector: 'app-managers',
  templateUrl: './managers.page.html',
  styleUrls: ['./managers.page.scss'],
})
export class ManagersPage implements OnInit {
  data: any;
  term: any;
  constructor(private modal: ModalController, private global: GlobalService) {

  }

  ionViewWillEnter() {
    this.global.getData1("Manager/getManagerList").subscribe((res: any) => {
      console.log('res', res);
      if (res) {
        this.data = res.data;
      }
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  close(item?) {
    this.modal.dismiss(item);
  }

}
