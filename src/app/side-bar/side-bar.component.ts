import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router){ }

  ngOnInit(): void {
  }
  isAuthenticated = this.authService.isAuthenticated();
  sideBarElements = [
    {title : "Client",root : '/Client'},
    {title : "Fournisseur",root : '/Fournisseur'},
    {title : "Produit",root : '/Produit'},
    {title : "Bon de livraison",root : '/Bon de livraison'},
    {title : "Retour",root : '/Retour'},
    {title : "Devis",root : '/Devis'},
    {title : "Echeance des cheques",root : '/Echeance des cheques'},
    {title : "Recette",root : '/Recette'},
    {title : "Bon de livraison Fournisseur",root : '/Bon de livraison Fournisseur'},
  ];
  goTo(root : string) : void{
    this.router.navigate([root])
  }
}
