import { Component, OnInit } from '@angular/core';
import { ContatoService } from  '../../services/contato.service'
@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contacts: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe(res => this.contacts = res.contacts)
  }

}
