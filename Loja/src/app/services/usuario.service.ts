import {EventEmitter, inject, Injectable, Input, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Plataforma} from "../models/plataforma";
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  @Input("usuario") usuario : Usuario = new Usuario();
  @Output("retorno") retorno =  new EventEmitter<any>()

  http = inject(HttpClient)

  API = "http://localhost:8080/usuarios/"
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

}
