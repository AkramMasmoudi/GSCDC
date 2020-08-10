import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navBarElements = [
    {title : "Produit",active : true}
  ];
  selectedNav = "Produit";
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
