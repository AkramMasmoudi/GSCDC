import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navBarElements = [
    {title : "Client",root : '',active : true},
    {title : "Bon de livraison",root : 'Client/Bon de livraison',active : false},
  ]
}
