import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from "./pages/login/login.component";
import { InformacoesComponent } from "./pages/informacoes/informacoes.component";
import { ProtegidoComponent } from "./pages/protegido/protegido.component";

const routes: Routes = [
  {path:"login", component: LoginComponent },
  {path:"informacoes", component: InformacoesComponent },
  {path:"protegido", component: ProtegidoComponent },
  {path:'', redirectTo:'/login', pathMatch: 'full' },
  {path:'protegido', redirectTo:'/login', pathMatch: 'full' },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
