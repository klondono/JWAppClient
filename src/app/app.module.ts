import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';

// Make sure we have to import this here
import { HttpClientModule } from '@angular/common/http';
import { ExceptionService } from './api/exception.service';

import { AppComponent } from './app.component';
import { MaterialModule } from './infrastructure/material.module';
import { TerritoryService } from './api';
import { HomeComponent } from './home/home.component';

// configure routes
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    // data: { preload: true }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TerritoryService, ExceptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
