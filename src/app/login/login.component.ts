import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/loginServices/login-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router,
    private snack: MatSnackBar) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
        mail: ['', /*[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@arsat.com.ar')]*/],
        pass: ['', [Validators.required, Validators.minLength(8)]],
    }
  );
}

get f() { return this.loginform.controls; }

onClickSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginform.invalid) {
    console.log(this.loginform.getError);
      return;
  }

  var usuario;
  var permisos;
  var usrRoles;
  var roles = [];
  var token;
  var pwExist;
  this.loginService.post(this.loginform.value['mail'], this.loginform.value['pass']).subscribe(
    (data)=>{
      usuario = data[0];
      token = data[1];
      pwExist = data[2];
      permisos = usuario.permissions;
      usrRoles = usuario.roles;
      let i = 0;
      for(i; i<usrRoles.length; i++){
        roles[i] = usrRoles[i].name;
      }
      console.log(roles);

      //console.log(permisos);
      //console.log(roles);
      
      if( usuario['employeeid'] === undefined ){
        this.snack.open( 'Las credenciales ingresadas son incorrectas', 'cerrar', {duration: 3000}  );
      }else{
        //console.log( usuario );
        //console.log( token );
        localStorage.setItem('currentUser', JSON.stringify(usuario) );
        localStorage.setItem('tokenUser', JSON.stringify(token) );
        localStorage.setItem('pwisnull', JSON.stringify(pwExist));
        localStorage.setItem('permisos', JSON.stringify(permisos));
        localStorage.setItem('roles', JSON.stringify(roles));
        this.snack.open('Bienvenido '+ usuario.name, 'cerrar', {duration: 3000}  );
        this.router.navigate(['']);
      }
    }, (error)=>{
      //console.log(this.loginform.value['mail']);
      //console.log(this.loginform.value['pass']);
      //console.log('error: ' + error);
      this.snack.open( 'Las credenciales ingresadas son incorrectas', 'cerrar', {duration: 3000}  );
    }
  );
   }


}


