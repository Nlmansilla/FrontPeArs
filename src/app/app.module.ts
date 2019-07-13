import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CargaRecibosComponent } from './carga-recibos/carga-recibos.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule}from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { RecibosComponent } from './recibos/recibos.component';
import { ClaveComponent } from './clave/clave.component';
import { BlanqueoComponent } from './blanqueo/blanqueo.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CargaRecibosComponent,
    LoginComponent,
    RecibosComponent,
    ClaveComponent,
    BlanqueoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    NgbModule,
    MatSidenavModule,
    NgxExtendedPdfViewerModule
  ],
  exports:[
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
