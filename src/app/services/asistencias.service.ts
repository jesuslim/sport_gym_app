import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {
  apiUrl = `${environment.apiUrl}/asistencias/`
  constructor(
    private http: HttpClient
  ) { }

  getAsistencias(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + id}`);
  }

}
