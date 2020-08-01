import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AgGridModule } from 'ag-grid-angular';
import { BonDeLivraisonComponent } from './bon-de-livraison/bon-de-livraison.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AuthComponent } from './auth/auth.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    BonDeLivraisonComponent,
    FournisseurComponent,
    AuthComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
