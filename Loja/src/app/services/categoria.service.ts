import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Jogo} from "../models/jogo";
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categoriaSubject = new BehaviorSubject<Categoria[]>([]);
  categoria$ = this.categoriaSubject.asObservable();

  http = inject(HttpClient)

  API = "http://localhost:8080/categorias/"
  constructor() { }

  findAll() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API);
  }

  findById (id: number) : Observable<Categoria>{
    return this.http.get<Categoria>(this.API + id)
  }

  save (categoria: Categoria) : Observable<string>{
    return this.http.post<string>(this.API, categoria, {responseType: 'text' as 'json'});
  }

  update (jogo: Jogo, id: number) : Observable<string>{
    return this.http.put<string>(this.API+id, jogo, {responseType: 'text' as 'json'});
  }

  deleteByid(id: number) : Observable<string>{
    return this.http.delete<string>(this.API+id, {responseType: 'text' as 'json'});
  }

  updateJogos() {
    this.findAll().subscribe({
      next: categoria => this.categoriaSubject.next(categoria),
      error: err => console.error('Erro ao atualizar jogos', err)
    });
  }
}
