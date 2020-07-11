import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gs-app';
  sideBarElements = [
    {title : "Client",root : ''},
    {title : "Fournisseur",root : 'Fournisseur'},
    {title : "Produit",root : 'Produit'},
    {title : "Bon de livraison",root : 'Bon de livraison'},
    {title : "Retour",root : 'Retour'},
    {title : "Devis",root : 'Devis'},
    {title : "Echeance des cheques",root : 'Echeance des cheques'},
    {title : "Recette",root : 'Recette'},
    {title : "Bon de livraison Fournisseur",root : 'Bon de livraison Fournisseur'},
  ];
  navBarElements = [
    {title : "Client",root : '',active : true},
    {title : "Bon de livraison",root : 'Client/Bon de livraison',active : false},
  ]

}
