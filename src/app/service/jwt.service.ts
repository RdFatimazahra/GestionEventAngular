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

  login(loginRequest:any): Observable<Jwt>{
    return this.http.post<Jwt>(BASE_URL+'authenticate', loginRequest)

  }

  demo(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(BASE_URL + 'demo', { headers });
  }

  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }

}