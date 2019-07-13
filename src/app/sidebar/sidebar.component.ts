import { Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private rd: Renderer2) { }

  ngOnInit() {
  }

}
