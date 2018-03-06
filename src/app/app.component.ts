import { Component, OnInit } from '@angular/core';

import { TerritoryService } from './api';
import { ITerritory } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  territories: ITerritory[] = [];

  constructor(private territoryService: TerritoryService) {}

  ngOnInit() {

    this.getTerritories();
  }

  getTerritories() {
    this.territories = [];

    this.territoryService.getTerritories().subscribe(territories => {
      this.territories = territories;
    },
    (err) => {
      console.log(err);
    },
    () => {console.log('done'); });
  }

}
