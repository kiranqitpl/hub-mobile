import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favourite-form',
  templateUrl: './favourite-form.page.html',
  styleUrls: ['./favourite-form.page.scss'],
})

export class FavouriteFormPage implements OnInit {

  pName: String = "Favourite form";
  menuData = [];
  updateRowId = '';

  constructor(
    private globalService: GlobalService,
    private toastService: ToastService,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.loadFavoriteList();
  }

  loadFavoriteList() {
    this.globalService.getData('PrestartMenu/get_PrestartMenu').subscribe(result => {
      if (result['status']) {
        this.menuData = result['data']['menu'].sort((a, b) => a.favorite_position - b.favorite_position);
        this.updateRowId = result['data'].id;
      } else {
        this.menuData = [];
      }
    }, error => {
      console.log(error);
    })
  }

  onRemoveFavorite(tabname, val) {
    this.menuData.filter(ele => {
      if (ele.menuName == tabname) {
        ele.favorite = val;
      }
    })
    this.updateMenu('remove');
  }

  updateMenu(val) {
    let data = {
      formData: {
        "id": this.updateRowId,
        "menu": this.menuData
      }
    }
    this.globalService.postData('PrestartMenu/submit', data).subscribe(result => {
      if (result['status'] && val != '' && val == 'remove') {
        this.toastService.toast('This form is removed from your favourite list.', 'success');
      }
    }, error => {
      console.log(error);
    })
  }

  onRenderItems(event) {
    let draggedItem = this.menuData.splice(event.detail.from, 1)[0];
    this.menuData.splice(event.detail.to, 0, draggedItem)
    event.detail.complete();
    this.menuData.forEach((element, index) => {
      element.favorite_position = index
    });
    this.menuData.sort((a, b) => a.favorite_position - b.favorite_position);
    this.updateMenu('');;
  }

  onGoToPage(route) {
    this.nav.navigateForward(route)
  }

}
