import { Client } from './../../classes/client';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.scss']
})
export class ClientsDetailsComponent implements OnInit {

  constructor(private dataservice : DataService) { }
  clients : any[] = [];
  ngOnInit(): void {
		
	this.dataservice.getAllClients()
	.subscribe((data) => {
		console.log("data !!! =>",data)
		this.clients = data;
	});

  }
  
  gridWith = "min-width: 750px; height: calc(100vh - 125px);";
 
  columnDefs = [
		{headerName: 'id', field: 'CtcID',editable : true,sortable: true, filter: true,resizable: true,width : 55},
		{headerName: 'Nom', field: 'LastName',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Prenom', field: 'FirstName',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Email', field: 'Email',editable : true,sortable: true, filter: true,resizable: true,flex : 2},
		{headerName: 'Tel 1', field: 'MobilePhone',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Tel 2', field: 'MobilePhone2',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Adresse', field: 'Address',editable : true,sortable: true, filter: true,resizable: true,flex : 2},
		{headerName: 'code TVA', field: 'CodeTVA',editable : true,sortable: true, filter: true,resizable: true,flex : 1}
	];
	cellValueChanged(ev): void{
		console.log(ev,this.clients);
	}   
}
