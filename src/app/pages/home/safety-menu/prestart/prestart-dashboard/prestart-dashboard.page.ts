import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';

@Component({
  selector: 'app-prestart-dashboard',
  templateUrl: './prestart-dashboard.page.html',
  styleUrls: ['./prestart-dashboard.page.scss'],
})

export class PrestartDashboardPage implements OnInit {

  pName: String = 'Prestart';
  loggedInUser = "";
  menuData = [];
  rowId = '';

  constructor(
    private globalService: GlobalService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.loadFavoriteList();
  }

  loadFavoriteList() {
    this.globalService.getData('PrestartMenu/get_PrestartMenu').subscribe(result => {
      if (result['status']) {
        this.menuData = result['data']['menu'].sort((a, b) =>
          parseInt(a['original_postion']) - parseInt(b['original_postion'])
        );
        this.rowId = result['data']['id'];
      } else {
        this.menuData = [];
      }
    }, error => {
      console.log(error);
    })
  }

  onFavorite(tabname, val) {
    this.menuData.filter(ele => {
      if (ele.menuName == tabname) {
        ele.favorite = val;
      }
    })
    let data = {
      formData: {
        "id": this.rowId,
        "menu": this.menuData
      }
    }

    this.globalService.postData('PrestartMenu/submit', data).subscribe(result => {
      if (result['status']) {
        if (val == true) {
          this.toastService.toast('This form is added in your favourite list.', 'success');
        } else if (val == false) {
          this.toastService.toast('This form is removed from your favourite list.', 'success');
        }
      }
    }, error => {
      console.log(error);
    })
  }

}
