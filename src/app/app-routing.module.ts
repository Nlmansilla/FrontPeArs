import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CargaRecibosComponent } from './carga-recibos/carga-recibos.component';
import { LoginComponent } from './login/login.component';
import { RecibosComponent} from './recibos/recibos.component';
import { ClaveComponent } from './clave/clave.component';
import { BlanqueoComponent} from './blanqueo/blanqueo.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recibos', component: CargaRecibosComponent},
  {path: 'ver/recibos' ,component: RecibosComponent},
  {path: 'clave', component: ClaveComponent},
  {path: 'blanquear-clave', component: BlanqueoComponent},
  {path: '**', pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
