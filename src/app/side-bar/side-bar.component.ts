import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 
  @Input()
  currentMenu : any ;
  
  constructor(private authService : AuthService,
              private router : Router){ }

  ngOnInit(): void {
    console.log(this.currentMenu)
    this.setActiveMenu();
  }
  
  isAuthenticated = this.authService.isAuthenticated();
  sideBarElements = [
    {title : "Client",root : '/Client' , active : false},
    {title : "Fournisseur",root : '/Fournisseur' , active : false},
    {title : "Produit",root : '/Produit' , active : false},
    {title : "Bon de livraison",root : '/Bon de livraison' , active : false},
    {title : "Retour",root : '/Retour' , active : false},
    {title : "Devie",root : '/Devie' , active : false},
    {title : "Echeance des cheques",root : '/Echeance des cheques' , active : false},
    {title : "Recette",root : '/Recette' , active : false},
    {title : "Bon de livraison Fournisseur",root : '/Bon de livraison Fournisseur' , active : false},
  ];
  setActiveMenu(){
    for (let index = 0; index < this.sideBarElements.length; index++) {
      if(this.sideBarElements[index].title == this.currentMenu){
        this.sideBarElements[index].active = true;
      }
      
    }
  }
  goTo(root : string) : void{
    this.router.navigate([root])
  }
}
