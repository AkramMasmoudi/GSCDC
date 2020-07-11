import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {
    path: '',
    component : ClientComponent,
  },{
    path: 'Fournisseur',
    component : ClientComponent,
  },{
    path: 'Produit',
    component : ClientComponent,
  },{
    path: 'Bon de livraison',
    component : ClientComponent,
  },{
    path: 'Retour',
    component : ClientComponent,
  },{
    path: 'Devis',
    component : ClientComponent,
  },{
    path: 'Echeance des cheques',
    component : ClientComponent,
  },{
    path: 'Recette',
    component : ClientComponent,
  },{
    path: 'Bon de livraison Fournisseur',
    component : ClientComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
