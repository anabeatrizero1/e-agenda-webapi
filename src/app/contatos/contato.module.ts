import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoAppComponent } from './contato-app.component';
import { ListarContatoComponent } from './listar/listar-contato.component';
import { ContatoService } from './services/contato.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContatoAppComponent,
    ListarContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ContatoService]
})
export class ContatoModule { }
