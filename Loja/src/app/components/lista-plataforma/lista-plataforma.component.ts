import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Adicionei isso
import { Plataforma } from "../../models/plataforma";
import { PlataformaService } from "../../services/plataforma.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-lista-plataforma',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Adicionei o CommonModule aqui
  templateUrl: './lista-plataforma.component.html',
  styleUrls: ['./lista-plataforma.component.css']  // Corrigido para styleUrls
})
export class ListaPlataformaComponent {

  @Input("plataforma") plataforma: Plataforma = new Plataforma();
  @Output("retorno") retorno = new EventEmitter<any>();

  plataformas: Plataforma[] = [];

  constructor(private plataformaService: PlataformaService) {  // Injeção via construtor
    this.findAll();
  }

  findAll() {
    this.plataformaService.findAll().subscribe({
      next: value => {
        console.log(value);
        this.plataformas = value;
      },
      error: err => {
        console.error("Erro ao mostrar dados: ", err); // Usando console.error em vez de alert
      }
    });
  }

  deletePlataforma(idPlataforma: number) {
    console.log(idPlataforma);
    this.plataformaService.deleteByid(idPlataforma).subscribe({
      next: value => {
        this.plataformas = this.plataformas.filter(plataforma => plataforma.id !== idPlataforma);
        Swal.fire({
          title: value,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      },
      error: err => {
        console.error("Erro ao excluir plataforma: ", err);
      }
    });
  }

  // editarPlataforma(plataforma: Plataforma ,idPlataforma: number){
  //   console.log(idPlataforma, plataforma);
  //   this.plataformaService.update(plataforma, idPlataforma).subscribe({
  //     next: value => {
  //
  //     }
  //   })
  // }
}
