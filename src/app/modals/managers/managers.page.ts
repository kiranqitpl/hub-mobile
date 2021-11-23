import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from '../../services/global-service/global.service'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.page.html',
  styleUrls: ['./managers.page.scss'],
})

export class ManagersPage implements OnInit {

  term: any;

  @Input('header') header: any;
  @Input('list') list: any;

  newList = new BehaviorSubject([]);

  constructor(
    private modal: ModalController,
    private global: GlobalService
  ) { }

  ionViewWillEnter() { }

  ngOnInit() {
    // console.log('get list in modal', this.list);
    this.newList.next(this.list);
  }

  onSearch(event) {
    let value: boolean = false
    this.list.forEach(element => {
      if (element.full_name == this.term) {
        value = true;
      }
    });
    if (value == false && event != '') {
      this.global.getData("user/getallemployee/" + event.detail.value).subscribe((res: any) => {
        if (res && res.data && res.data.length > 0) {
          res.data.unshift({ full_name: "Other", employee_id: '0' });
          this.newList.next(res.data);
        } else {
          this.newList.next(this.list);
        }
      }, err => {
        console.log(err);
      });
    }
  }

  close(item?) {
    this.modal.dismiss(item);
  }

}
