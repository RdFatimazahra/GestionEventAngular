import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwt } from '../model/jwt';


const BASE_URL  = ["http://localhost:8081/api/v1/auth/"]
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor( private http : HttpClient) { }

  register(signRequest:any): Observable<Jwt>{
    return this.http.post<Jwt>(BASE_URL+'register', signRequest)

  }
}