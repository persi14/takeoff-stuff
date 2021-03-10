import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<any>{
    const params = new HttpParams().set('email', email);
    return this.http.get('/users', {params});
  }
}
