import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor( private httpClient : HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/getTypeFilesList');
  }

  post(sabana){
    let token = JSON.parse(localStorage.getItem('tokenUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token.token
      })
    };
    return this.httpClient.post(this.API_ENDPOINT + '/pdfUpload',sabana, httpOptions ).subscribe(
      (data)=>{
        console.log(sabana);
        console.log('server devuelve ok: ' + JSON.stringify(data) );
        alert(JSON.stringify('El archivo ha sido cargado correctamente con el nombre: ' + data) );
        window.location.reload();
      },
      (error)=>{
        console.log('Error en post de archivo: ' + error);
      }
    );
  }

  GenerarRecibos(){
    let token = JSON.parse(localStorage.getItem('tokenUser'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token.token
      })
    };
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let user = {
      'id' : currentUser.id,
      'legajo' : currentUser.employeeid,
      'token': token.token
    }
    console.log(user);
    // return this.httpClient.post(this.API_ENDPOINT + '/GenerarPdf', user ,httpOptions).subscribe(
    //   ()=>{
    //     console.log('genero pdf');
    //   }, (error)=>{
    //     console.log('no genero pdf: ' + error);
    //   }
    // );
  }
}
