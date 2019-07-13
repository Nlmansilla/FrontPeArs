import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaveService {
  API_ENDPOINT = 'http://192.168.32.151:8001/api';
  usuario = JSON.parse( localStorage.getItem('currentUser') );
  token = JSON.parse( localStorage.getItem('tokenUser') );
  constructor(private httpClient : HttpClient) { }

  post(pwData){

    const httpOptions = {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        'authorization' : this.token.token
      })
    };
    return this.httpClient.post(this.API_ENDPOINT + '/changePassword', pwData, httpOptions);
  }

  reset(pwData){
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        'authorization' : this.token.token
      })
    };
    console.log('servicio');
    console.log(pwData);
  }
}
