import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaveService } from '../services/claveServices/clave.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.component.html',
  styleUrls: ['./clave.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClaveComponent implements OnInit {
  claveForm : FormGroup;
  submitted = false;
  currentUser;
  token;
  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private claveService : ClaveService,
              private snack: MatSnackBar) {
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.token = JSON.parse(localStorage.getItem('tokenUser'));
                if(this.currentUser === null ){
                  this.router.navigate(['login']);
                }
               }

  ngOnInit() {
    this.claveForm = this.formBuilder.group({
      passactual: ['', [Validators.required , 
        Validators.minLength(8),
        Validators.pattern('^[a-zA-Z0-9_.+-]+')]],
        passnueva: ['', [Validators.required ,
          Validators.minLength(8),
          Validators.pattern('^[a-zA-Z0-9_.+-]+')]],
        passnuevaconfirm: ['', [Validators.required ]]
  }
);
  }

  get f() { return this.claveForm.controls; }

  claveSubmit(){
    this.submitted = true;
    if(this.claveForm.valid){
      console.log('submit');
      let data = {
        'id': this.currentUser.id,
        'token': this.token.token,
        'passOld': this.claveForm.get('passactual').value,
        'passNew': this.claveForm.get('passnueva').value
      }
      this.claveService.post(data).subscribe(
        (data)=>{
          console.log('exito en cambio de pass: ' + data);
        },
        (error)=>{
          this.snack.open('Ocurrió un error al modificar la contraseña', 'Cerrar', {duration:2500});
        }
      );
    }else{
      this.snack.open('Los campos no son válidos', 'Cerrar', {duration:2500});
    }
    
  }
}
