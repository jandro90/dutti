import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ships } from 'src/app/interfaces/ships.interface';
import { ShipsService } from 'src/app/services/ships/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Observable<Ships[]>

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.dataList = this.shipsService.getShips();
  }
}
