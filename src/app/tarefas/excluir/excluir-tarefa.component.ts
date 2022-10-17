import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { VisualizarTarefaViewModel } from '../view-models/visualizar-tarefa.view-model';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styles: [
  ]
})
export class ExcluirTarefaComponent implements OnInit {

  public tarefaFormVM: VisualizarTarefaViewModel = new VisualizarTarefaViewModel();

  constructor(
    title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private tarefaService: TarefaService
  ) {
    title.setTitle('Excluir Tarefa - eAgenda')
  }

  ngOnInit(): void {
    this.tarefaFormVM = this.route.snapshot.data['tarefa'];
  }

  public gravar(){
    this.tarefaService.excluir(this.tarefaFormVM.id)
      .subscribe({
        next: (tarefaId) => this.processarSucesso(tarefaId),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(tarefa: string) {
    this.router.navigate(['/tarefas/listar']);
  }

  private processarFalha(erro: any) {
    if (erro)
      console.error(erro)
  }

}
