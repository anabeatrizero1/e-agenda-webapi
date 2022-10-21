import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { VisualizarContatoViewModel } from '../view-models/visualizar-contato.view-model';

@Component({
  selector: 'app-excluir-contato',
  templateUrl: './excluir-contato.component.html',
  styles: [
  ]
})
export class ExcluirContatoComponent implements OnInit {
  public contatoFormVM: VisualizarContatoViewModel = new VisualizarContatoViewModel();

  constructor(
    title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService
  ) {
    title.setTitle('Excluir Contato - eAgenda')
  }

  ngOnInit(): void {
    this.contatoFormVM = this.route.snapshot.data['contato'];
  }

  public gravar(){
    this.contatoService.excluir(this.contatoFormVM.id)
      .subscribe({
        next: (contatoId) => this.processarSucesso(contatoId),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contato: string) {
    this.router.navigate(['/contatos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro)
      console.error(erro)
  }

}
