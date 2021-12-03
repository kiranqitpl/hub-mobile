import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service/global.service';

@Component({
  selector: 'app-crane-view-detail',
  templateUrl: './crane-view-detail.page.html',
  styleUrls: ['./crane-view-detail.page.scss'],
})
export class CraneViewDetailPage implements OnInit {

  pName: String = 'Crane Details';

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  loadData() {
    // this.globalService.getData('Add_form/getSingleData?table_name=add_form&id='+).subscribe(result=>{

    // })
  }

}
