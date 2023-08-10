import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = `${environment.apiUrl}/auth/`

  constructor(
    private http: HttpClient
  ) { }

  loginAuth(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, data);
  }
}
