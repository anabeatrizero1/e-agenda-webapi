import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { FormsContatoViewModel } from '../view-models/forms-contato.view-model';

@Component({
  selector: 'app-inserir-contato',
  templateUrl: './inserir-contato.component.html'
})
export class InserirContatoComponent implements OnInit {
  public formContato: FormGroup;

  public contatoFormVM: FormsContatoViewModel = new FormsContatoViewModel();

  constructor(
    title: Title,
    private fb: FormBuilder,
    private contatoServicice: ContatoService,
    private router: Router
  ) {
    title.setTitle("Cadastrar Contato - eAgenda")
  }

  ngOnInit(): void {
    this.formContato = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['',[Validators.required]],
      empresa: ['', [Validators.required, Validators.minLength(3)]],
      cargo: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get nome() {
    return this.formContato.get('nome');
  }

  get email() {
    return this.formContato.get('email');
  }

  get telefone() {
    return this.formContato.get('telefone');
  }

  get empresa() {
    return this.formContato.get('empresa');
  }

  get cargo() {
    return this.formContato.get('cargo');
  }

  public gravar() {
    if (this.formContato.invalid) return;

    this.contatoFormVM = Object.assign({}, this.contatoFormVM, this.formContato.value)

    this.contatoServicice.inserir(this.contatoFormVM)
      .subscribe({
        next: (tarefaInserida) => this.processarSucesso(tarefaInserida),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(contato: FormsContatoViewModel): void {
    this.router.navigate(['/contatos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro)
      console.error(erro)
  }

}
