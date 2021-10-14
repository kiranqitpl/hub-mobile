import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  pageName: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRout()
  }

  getRout() {
    console.log('activatedRoute', this.activatedRoute);
    console.log('activatedRoute', this.activatedRoute['_routerState'].snapshot.url);

    let rout = this.activatedRoute['_routerState'].snapshot.url;

    console.log('rout', rout.split("/"));

    this.pageName = rout.split("/")['1'];
    
    console.log('this.pageName', this.pageName);
  }


}
