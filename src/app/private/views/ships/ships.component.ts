import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_SHIPS } from 'src/app/ngrx/actions/ships.actions';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch({type: LOAD_SHIPS})
  }
}
