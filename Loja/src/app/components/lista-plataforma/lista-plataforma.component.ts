import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import {Jogo} from "../../models/jogo";
import {JogoService} from "../../services/jogo.service";
import {Plataforma} from "../../models/plataforma";
import {PlataformaService} from "../../services/plataforma.service";

@Component({
  selector: 'app-lista-plataforma',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lista-plataforma.component.html',
  styleUrl: './lista-plataforma.component.css'
})
export class ListaPlataformaComponent {

  @Input("plataforma") plataforma : Plataforma = new Plataforma();
  @Output("retorno") retorno = new EventEmitter<any>();

  plataformas: Plataforma[] = [];
  plataformaService = inject(PlataformaService);

  constructor() {
    this.findAll();
  }

  findAll(){
    this.plataformaService.findAll().subscribe({
      next: value => {
        console.log(value);
        this.plataformas = value;
      },
      error: err => {
        alert("Erro ao mostrar dados: "+ err)
      }
    })
  }

  deletePlataforma(idPlataforma: number){
    this.plataformaService.deleteByid(idPlataforma).subscribe({
      next: value => {

      },
      error: err => {

      }
    })
  }

}
