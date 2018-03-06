import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Make sure we have to import this here
import { HttpClientModule } from '@angular/common/http';
import { ExceptionService } from './api/exception.service';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { MaterialModule } from './infrastructure/material.module';
import { TerritoryService } from './api';
import { HomeComponent } from './home/home.component';


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
    AppRouterModule
  ],
  providers: [TerritoryService, ExceptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
