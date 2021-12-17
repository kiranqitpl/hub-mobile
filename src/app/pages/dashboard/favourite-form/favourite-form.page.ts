import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-favourite-form',
  templateUrl: './favourite-form.page.html',
  styleUrls: ['./favourite-form.page.scss'],
})
export class FavouriteFormPage implements OnInit {

  pName: String = "Favourite form"

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
  }

  onRemoveFavorite(tabname) {
    this.sharedService.prestartMenu.filter(ele => {
      if (ele.menuName == tabname) {
        ele.favorite = false;
      }
    })
  }

}
