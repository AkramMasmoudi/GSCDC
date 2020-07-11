import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AgGridModule } from 'ag-grid-angular';
import { BonDeLivraisonComponent } from './bon-de-livraison/bon-de-livraison.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    BonDeLivraisonComponent,
    FournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
