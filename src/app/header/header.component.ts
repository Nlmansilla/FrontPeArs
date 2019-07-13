import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/loginServices/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  currentUser;
  pwisnull;
  collapsed = true;
  private roles;
  constructor( private router : Router, private loginService : LoginServiceService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.pwisnull = JSON.parse(localStorage.getItem('pwisnull'));
    this.pwisnull = this.pwisnull.pwExist;
    this.roles = JSON.parse(localStorage.getItem('roles'));
  }

  ngOnInit() {
  }

  clickLogout(){

    var aceptar = confirm('Desea cerrar su sesión');
    if(aceptar){
        this.loginService.salir().subscribe( ()=>{
          localStorage.removeItem('currentUser');
          alert('Hasta luego! =)');
          this.router.navigate(["login"]);
        }, (error)=>{
          console.log('Error al terminar la sesión | ' + error);
        } );
      
    }
  
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
