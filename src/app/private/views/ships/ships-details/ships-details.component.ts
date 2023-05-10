import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_STORE } from 'src/app/ngrx/store';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  dataList;
  config: any;
  shipId: string = '';
  shipImgUrlBase: string = 'https://starwars-visualguide.com/assets/img/starships/';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.dataList = this.store.select((state: APP_STORE) => state.ships)
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getStarshipId(url) {
    if(!url) return;
    const urlFragments = url.split('/');
    this.shipId = urlFragments[urlFragments.length - 2];

    return `${this.shipImgUrlBase}${this.shipId}.jpg`;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
