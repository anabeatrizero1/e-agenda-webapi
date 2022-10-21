import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';

const routes: Routes = [
  {
    path: '', component: CompromissoAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path:'', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListarCompromissoComponent },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompromissoRoutingModule { }
