import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Categoria} from "../models/categoria";
import {HttpClient} from "@angular/common/http";
import {Jogo} from "../models/jogo";
import {Plataforma} from "../models/plataforma";

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private plataformaSubject = new BehaviorSubject<Plataforma[]>([]);
  plataforma$ = this.plataformaSubject.asObservable();

  http = inject(HttpClient)

  API = "http://localhost:8080/plataformas/"
  constructor() { }

  findAll() : Observable<Plataforma[]>{
    return this.http.get<Plataforma[]>(this.API);
  }

  findById (id: number) : Observable<Plataforma>{
    return this.http.get<Plataforma>(this.API + id)
  }

  save (plataforma: Plataforma) : Observable<string>{
    return this.http.post<string>(this.API, plataforma, {responseType: 'text' as 'json'});
  }

  update (plataforma: Plataforma, id: number) : Observable<string>{
    return this.http.put<string>(this.API+id, plataforma, {responseType: 'text' as 'json'});
  }

  deleteByid(id: number) : Observable<string>{
    return this.http.delete<string>(this.API+id, {responseType: 'text' as 'json'});
  }

  updateJogos() {
    this.findAll().subscribe({
      next: categoria => this.plataformaSubject.next(categoria),
      error: err => console.error('Erro ao atualizar jogos', err)
    });
  }
}
