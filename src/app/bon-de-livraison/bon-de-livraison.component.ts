import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bon-de-livraison',
  templateUrl: './bon-de-livraison.component.html',
  styleUrls: ['./bon-de-livraison.component.scss']
})
export class BonDeLivraisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navBarElements = [
  ];
  selectedNav = "";
  onSelectNav(nav: string) {
	this.selectedNav = nav;
	for (let index = 0; index < this.navBarElements.length; index++) {
		let elm = this.navBarElements[index];
		if(elm.title == nav){
			this.navBarElements[index].active = true;
		}else{
			this.navBarElements[index].active = false;
		}
	}
  }
}
