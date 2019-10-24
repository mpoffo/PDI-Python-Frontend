import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = 'http://127.0.0.1:5002/contacts';

  constructor(private http: HttpClient) { }

  listar() {
      return this.http.get<any>(`${this.contatosUrl}`);
  }
}
