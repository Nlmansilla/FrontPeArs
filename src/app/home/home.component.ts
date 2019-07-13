import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser;
  constructor(private router : Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser === null){
      this.router.navigate(["login"]);
    }
   }

  ngOnInit() {
    
  }

}
