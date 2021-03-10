import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DTOLoginRequest} from '../../models/DTOLoginRequest/dtologin-request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(request: DTOLoginRequest): Observable<any>{
    return this.http.post('/login', request);
  }
}
