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
  gridWith = "min-width: 750px; height: calc(100vh - 235px);";
  columnDefs = [
		{headerName: 'Nom du produit', field: 'nomProd',editable : true,sortable: true, filter: true,resizable: true,flex : 3 },
		{headerName: 'Unite', field: 'unite',editable : true,sortable: true, filter: true,resizable: true,flex : 1 },
		{headerName: 'Quantite', field: 'qte',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Groupe', field: 'grp',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Prix unitaire', field: 'prixUnitaire',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Total vente', field: 'totVente',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: "Prix d'achat", field: 'prixAchat',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Total achat', field: 'totAchat',editable : true,sortable: true, filter: true,resizable: true,flex : 1}
	];

	rowData = [];
}
