import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { ContatoAppComponent } from './contato-app.component';
import { ListarContatoComponent } from './listar/listar-contato.component';

const routes: Routes = [
  {
    path: '', component: ContatoAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path:'', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListarContatoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
