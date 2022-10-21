import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { compromissoService } from '../services/compromisso.service';
import { ListarCompromissoViewModel } from '../view-models/listar-compromissos.view-model';

@Component({
  selector: 'app-listar-compromisso',
  templateUrl: './listar-compromisso.component.html',
})
export class ListarCompromissoComponent implements OnInit {
  public compromissos$: Observable<ListarCompromissoViewModel[]>;

  constructor(private compromissoService: compromissoService) { }

  ngOnInit(): void {
    this.compromissos$ = this.compromissoService.selecionarTodos();
  }

}
