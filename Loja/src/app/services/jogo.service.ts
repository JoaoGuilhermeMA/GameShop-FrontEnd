import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Jogo} from "../models/jogo";

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private jogosSubject = new BehaviorSubject<Jogo[]>([]);
  jogos$ = this.jogosSubject.asObservable();

  http = inject(HttpClient)

  API = "http://localhost:8080/jogos/"
  constructor() { }

  findAll() : Observable<Jogo[]>{
    return this.http.get<Jogo[]>(this.API);
  }

  findById (id: number) : Observable<Jogo>{
    return this.http.get<Jogo>(this.API + id)
  }

  save (jogo: Jogo) : Observable<string>{
    return this.http.post<string>(this.API, jogo, {responseType: 'text' as 'json'});
  }

  update (jogo: Jogo, id: number) : Observable<string>{
    return this.http.put<string>(this.API+id, jogo, {responseType: 'text' as 'json'});
  }

  deleteByid(id: number) : Observable<string>{
    return this.http.delete<string>(this.API+id, {responseType: 'text' as 'json'});
  }

  updateJogos() {
    this.findAll().subscribe({
      next: jogos => this.jogosSubject.next(jogos),
      error: err => console.error('Erro ao atualizar jogos', err)
    });
  }

}
