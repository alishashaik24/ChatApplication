import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
    
  login_URL = "https://frozen-brook-09618.herokuapp.com"

  constructor(private http: HttpClient) { 
  }

  postUser(userData: any) {
    var headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.post<any>(this.login_URL + `/users`, userData,{headers:headers})
  }

  getUserDetails(email: any) {
    var headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.get<any>(this.login_URL + `/users/${email}`,{headers:headers})
  }
  
}
