import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AgGridModule } from 'ag-grid-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BonDeLivraisonComponent } from './bon-de-livraison/bon-de-livraison.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AuthComponent } from './auth/auth.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BonDeLivraisonClientComponent } from './client/bon-de-livraison-client/bon-de-livraison-client.component';
import { ClientsDetailsComponent } from './client/clients-details/clients-details.component';
import { LstFournisseursComponent } from './fournisseur/lst-fournisseurs/lst-fournisseurs.component';
import { BonDeCommandesComponent } from './fournisseur/bon-de-commandes/bon-de-commandes.component';
import { ProduitComponent } from './produit/produit.component';
import { AjoutModifProduitComponent } from './produit/ajout-modif-produit/ajout-modif-produit.component';
import { HistoProdComponent } from './produit/histo-prod/histo-prod.component';
import { NouvGrpComponent } from './produit/nouv-grp/nouv-grp.component';
import { NouvInvComponent } from './produit/nouv-inv/nouv-inv.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    BonDeLivraisonComponent,
    FournisseurComponent,
    AuthComponent,
    SideBarComponent,
    NavBarComponent,
    BonDeLivraisonClientComponent,
    ClientsDetailsComponent,
    LstFournisseursComponent,
    BonDeCommandesComponent,
    ProduitComponent,
    AjoutModifProduitComponent,
    HistoProdComponent,
    NouvGrpComponent,
    NouvInvComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    DragDropModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    AuthService,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [AjoutModifProduitComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
