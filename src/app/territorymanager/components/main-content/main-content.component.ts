import { Component, OnInit } from '@angular/core';
import { ITerritory } from '../../../infrastructure/models';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  territories: any[] = [
    {
      TerritoryId: 0, 
      TerritoryNumber: 1, 
      TerritoryDescription:"Hialeah",
      TerritoryLocation: "Hialeah",
      LastPreached: "01/01/2017",
      TerritoryMapLink: "1"
    },
    {
      TerritoryId: 1, 
      TerritoryNumber: 2, 
      TerritoryDescription:"Hialeah",
      TerritoryLocation: "Hialeah",
      LastPreached: "01/01/2017",
      TerritoryMapLink: "1"
    },
    {
      TerritoryId: 2, 
      TerritoryNumber: 3, 
      TerritoryDescription:"Hialeah",
      TerritoryLocation: "Hialeah",
      LastPreached: "01/01/2017",
      TerritoryMapLink: "1"
    },
    {
      TerritoryId: 3, 
      TerritoryNumber: 4, 
      TerritoryDescription:"Hialeah",
      TerritoryLocation: "Hialeah",
      LastPreached: "01/01/2017",
      TerritoryMapLink: "1"
    },
    {
      TerritoryId: 4, 
      TerritoryNumber: 5, 
      TerritoryDescription:"Hialeah",
      TerritoryLocation: "Hialeah",
      LastPreached: "01/01/2017",
      TerritoryMapLink: "1"
    },
    {
      TerritoryId: 5, 
      TerritoryNumber: 6, 
      TerritoryDescription:"Hialeah",
      TerritoryLocation: "Hialeah",
      LastPreached: "01/01/2017",
      TerritoryMapLink: "1"
    }

  ];

  constructor() { }

  ngOnInit() {
    console.log(this.territories);
  }

}
