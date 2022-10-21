import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompromissoRoutingModule } from './compromisso-routing.module';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';


@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissoRoutingModule
  ]
})
export class CompromissoModule { }
