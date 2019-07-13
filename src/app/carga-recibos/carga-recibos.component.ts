import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecibosService } from '../services/recibos/recibos.service';


@Component({
  selector: 'app-carga-recibos',
  templateUrl: './carga-recibos.component.html',
  styleUrls: ['./carga-recibos.component.css']
})
export class CargaRecibosComponent implements OnInit {
  currentUser = null;
  tipos;
  sabana :FormData = new FormData();
  file;
  cargaPdf: FormGroup;
  // meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'
  // , 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  meses = [ {nombre: 'Enero',numero: 1}, {nombre: 'Febrero',numero: 2}, {nombre: 'Marzo',numero: 3}, {nombre: 'Abril',numero: 4},
  {nombre: 'Mayo',numero: 5}, {nombre: 'Junio',numero: 6}, { nombre: 'Julio',numero: 7 }, { nombre: 'Agosto',numero: 8 },
  { nombre: 'Septiembre',numero: 9 }, { nombre: 'Octubre',numero: 10 }, {nombre: 'Noviembre',numero: 11}, {nombre: 'Diciembre',numero: 12} ];
  constructor(private router : Router, private formBuilder : FormBuilder, 
              private recibosService : RecibosService) {
    this.currentUser = localStorage.getItem('currentUser');
    this.recibosService.get().subscribe( (data)=>{
      console.log(data);
      this.tipos = data;
      console.log(this.tipos);
    } , (error)=>{
      console.log('error: ' + error);
    } );
    if(this.currentUser === null){
    this.router.navigate(['login']);
    }
   }

  // pdfForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  ngOnInit() {
    let dt = new Date();
    console.log(dt.getFullYear());
    this.cargaPdf = this.formBuilder.group({
      selectedMes: ['', [Validators.required]],
      year: ['', [Validators.max(dt.getFullYear()), Validators.min(2006)]],
      selectedTipo : ['', [Validators.required]],
      selectedArchivo: ['', [Validators.required]]
  }
);
  }

  get f() { return this.cargaPdf.controls; }

  cargaArchivo(file: FileList){
    this.file = file[0];
  }

  onSubmit(ev) {
    ev.preventDefault();
    //alert(files);
    // TODO: Use EventEmitter with form value
    if(this.cargaPdf.valid){
      this.sabana.append( 'mes', this.cargaPdf.get('selectedMes').value);
      this.sabana.append('year', this.cargaPdf.value['year']);
      this.sabana.append('tipo', this.cargaPdf.value['selectedTipo']);
      this.sabana.append('archivo', this.file);
      this.recibosService.post(this.sabana);
    }
    //alert('submit error');
  }

}
