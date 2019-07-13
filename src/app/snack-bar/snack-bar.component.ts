import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class PizzaPartyComponent {}
export class SnackBarComponent implements OnInit {
  duracion = 5000;
  
  constructor(private msg : string,private snack : MatSnackBar) { }

  ngOnInit() {
  }

  AbrirSnack(){
    this.snack.openFromComponent(PizzaPartyComponent,{
      duration: this.duracion,
      announcementMessage: this.msg
    });
  }

}
