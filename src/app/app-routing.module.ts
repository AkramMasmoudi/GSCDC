import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component : AuthComponent,
  },{
    path: 'Client',
    component : ClientComponent,
   // canActivate : [AuthGuard]
  },{
    path: 'Fournisseur',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Produit',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Bon de livraison',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Retour',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Devis',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Echeance des cheques',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Recette',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Bon de livraison Fournisseur',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
