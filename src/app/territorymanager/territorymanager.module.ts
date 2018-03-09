import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Routes, RouterModule} from '@angular/router';

import { MaterialModule } from './../infrastructure/angularMaterial/material.module';
import { TerritoryManagerAppComponent } from './territorymanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

// configure routes
export const routes: Routes = [
  { path: '', component: TerritoryManagerAppComponent,
    children:[
      { path: '', component:MainContentComponent}
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TerritoryManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ]
})
export class TerritoryManagerModule { }
