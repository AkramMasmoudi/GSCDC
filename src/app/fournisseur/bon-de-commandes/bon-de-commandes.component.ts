import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bon-de-commandes',
  templateUrl: './bon-de-commandes.component.html',
  styleUrls: ['./bon-de-commandes.component.css']
})
export class BonDeCommandesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today = new Date();
}
