import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ClaveService } from '../services/claveServices/clave.service';

@Component({
  selector: 'app-blanqueo',
  templateUrl: './blanqueo.component.html',
  styleUrls: ['./blanqueo.component.css']
})
export class BlanqueoComponent implements OnInit {
  submitted = false;
  blanqueoForm: FormGroup;
  currentUser;
  token;

  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private snack: MatSnackBar,
              private claveService: ClaveService) {
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.token = JSON.parse(localStorage.getItem('tokenUser'));
                if(this.currentUser === null){
                  this.router.navigate(["login"]);
                }
               }

  ngOnInit() {
    this.blanqueoForm = this.formBuilder.group({
      nuevopass: ['', [Validators.required,Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9_.+-]+')] ],
      nuevopassconfirm: ['', [ Validators.required] ]
    });
  }

  get b() { return this.blanqueoForm.controls; }

  onsubmitblanqueo(){
    this.submitted = true;
    if(this.blanqueoForm.valid){
      let data = {
        'id': this.currentUser.id,
        'token': this.token.token,
        'passNew': this.blanqueoForm.get('nuevopass').value
      }
      console.log(data);
      this.claveService.reset(data);
    }else{
      this.snack.open( 'Los valores ingresados no son correctos', 'cerrar', {duration: 3000}  );
    }
  }
}
