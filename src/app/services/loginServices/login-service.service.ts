import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  //API_ENDPOINT = 'http://192.168.32.151:8001/api';
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) {}

  post(email, pwd){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    };
    var usuario = {
      'email' : email,
      'password' : pwd
    };
    //console.log(usuario);
    //console.log(httpOptions);
    
    //console.log(this.httpClient.post(this.API_ENDPOINT + '/loginapi', usuario ,httpOptions));
    return this.httpClient.post(this.API_ENDPOINT + '/login', usuario, httpOptions);
  }

  salir(){
    var pwd = JSON.parse( localStorage.getItem('currentUser') );
    pwd = pwd['id'];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    let token = JSON.parse(localStorage.getItem('tokenUser'));
    console.log(token.token);
    var salir = {
      'token' : token.token,
      'id' : pwd
    };
    //Es un post name->logout(token, id) => lo recibe como $Request->token
    //Si es ok devuelve 200
    //Si es todo mal devuelve 503
    console.log(salir);
    return this.httpClient.post(this.API_ENDPOINT + '/logout', salir , httpOptions);
  }

  setPwd(pwd){
    //confirm(localStorage.getItem('currentUser'));
    var user = JSON.parse(localStorage.getItem('currentUser'));
    var id = user['id'];
    var email = user['email'];
    var tokenUsr = JSON.parse(localStorage.getItem('tokenUser'));
    console.log(user);
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    var data = {
      'id' : id,
      'token' : tokenUsr.token,
      'password' : pwd,
      'email': email
    };
    console.log(data);
    return this.httpClient.post(this.API_ENDPOINT + '/setPassword', data, httpOptions);
  }
}