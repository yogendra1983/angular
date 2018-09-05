import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UserinfoService {

  //private _headers = {headers: new HttpHeaders().set('Authentication', 'application/json')};
  constructor(private http: HttpClient) { }
  public getData() {
    return this.http.get('http://localhost/cashApp/service/api/userInfo');
  }


}
