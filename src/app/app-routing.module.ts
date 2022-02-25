import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AcceuilComponent } from './dashbord/acceuil/acceuil.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: "", component: InscriptionComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "home", component: AcceuilComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
