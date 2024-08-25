import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jogo} from "../models/jogo";

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  http = inject(HttpClient)

  API = "http://localhost:8080/jogos/"
  constructor() { }

  findAll() : Observable<Jogo[]>{
    return this.http.get<Jogo[]>(this.API);
  }

  findById (id: number) : Observable<Jogo>{
    return this.http.get<Jogo>(this.API + id)
  }

  // save () : {
  //
  // }
}
