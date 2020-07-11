import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gridWith = "min-width: 750px; height: calc(100vh - 125px);";
  columnDefs = [
		{headerName: 'Nom', field: 'nom',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Prenom', field: 'prenom',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Email', field: 'email',editable : true,sortable: true, filter: true,resizable: true,flex : 2},
		{headerName: 'Tel 1', field: 'tel1',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Tel 2', field: 'tel2',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Adresse', field: 'adresse',editable : true,sortable: true, filter: true,resizable: true,flex : 3},
		{headerName: 'code TVA', field: 'tva',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'code Client', field: 'codeclient',editable : true,sortable: true, filter: true,resizable: true,flex : 1}
	];

	rowData = [{ nom : "Akram" , 
				 prenom : "Masmoudi" ,
				 email : "masmoudiakram14@gamil.com" ,
				 tel1 : "20765773", 
				 adresse : "route Lafrane km7 Sfax ",
				 tva : "xxx",
				 codeclient : "yyyy"
				}];

}
