import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { RecibosService } from '../services/recibos/recibos.service';
import { recibo } from '../interfaces/resumen';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/loginServices/login-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecibosComponent implements OnInit {
  resumen : recibo[];
  submitted = false;
  passform : FormGroup;
  currentUser = null;
  pwisnull = null;
  bodyText:string;
  constructor(private rec : RecibosService, private router : Router, 
              private formBuilder: FormBuilder,
              private loginServ : LoginServiceService,
              private modalService : NgbModal,
              private snack : MatSnackBar) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.pwisnull = JSON.parse(localStorage.getItem('pwisnull'));
    this.pwisnull = this.pwisnull.pwExist;
    //confirm(this.pwisnull);
    //console.log(this.pwisnull);
    if(this.currentUser === null){
      this.router.navigate(['login']);
    }
    //this.resumen = this.rec.get();
    // .subscribe( (data: recibo[])=>{
    //   this.resumen = data;
    // },(error)=>{
    //   console.log('error en get recibos');
    //   console.log(error);
    // } )
   }

  ngOnInit() {
    this.passform = this.formBuilder.group({
      passw: ['', [Validators.required, 
                  Validators.minLength(8),
                  Validators.pattern('^[a-zA-Z0-9_.+-]+')] ],
      passConfirm : ['', [Validators.required]]
  }
);
  if( JSON.parse(localStorage.getItem('pwisnull'))==1 ){
    this.rec.GenerarRecibos();
  }
  }


  get f() { return this.passform.controls; }

  passSubmit(){
    this.submitted = true;

    if(this.passform.valid){
      this.loginServ.setPwd( this.passform.get('passw').value ).subscribe( (data)=>{
        localStorage.setItem('pwisnull' , '1');
        this.snack.open('Su contraseña ha sido generada con éxito...Redireccionando', 'cerrar', {duration: 3000} );
        window.setTimeout(function(){
          window.location.reload();
        },3000);
        
      } , (error)=>{
        console.log(error);
      } );
    }
    

  }


  openScrollableContent(longContent, idx) {
    console.log(idx);
    //this.bodyText = "sasasasasasasasasasas";
    this.bodyText = this.fillModalBodyText(idx);
    this.modalService.open(longContent, { scrollable: true, size:"xl" });
  }

  fillModalBodyText(idx){
    
    return "contenido de pdf";
  }

}
