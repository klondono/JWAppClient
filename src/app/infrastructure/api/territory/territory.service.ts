import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize, map } from 'rxjs/operators';

import { APICONFIG } from '../../config/api.config';

import { ExceptionService } from '../exception.service';
import { ITerritory } from '../../models';



const territoriesUrl = APICONFIG.urls.territories;

@Injectable()
export class TerritoryService {

  constructor(private http: HttpClient, private exceptionService: ExceptionService) { }

  private catchHttpErrors = () => (source$: Observable<any>) =>
    source$.pipe(
      catchError(this.exceptionService.catchBadResponse),
      finalize(() => console.log('finished'))
    )

  addTerritory(territory: ITerritory): Observable<ITerritory> {
    // this.spinnerService.show();
    return this.http.post<ITerritory>(`${territoriesUrl}`, territory)
    .pipe(this.catchHttpErrors());
  }

  deleteTerritory(territory: ITerritory): Observable<ITerritory> {
    // this.spinnerService.show();
    return this.http.delete(`${territoriesUrl}/${territory.TerritoryId}`)
    .pipe(this.catchHttpErrors());
  }

  getTerritories(): Observable<ITerritory[]> {
    // this.spinnerService.show();
    return this.http
      .get<ITerritory[]>(territoriesUrl)
      .pipe(this.catchHttpErrors());
  }
}
