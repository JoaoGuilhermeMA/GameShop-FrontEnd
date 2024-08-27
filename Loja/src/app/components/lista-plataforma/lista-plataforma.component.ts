import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Adicionei isso
import { Plataforma } from "../../models/plataforma";
import { PlataformaService } from "../../services/plataforma.service";

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
    this.plataformaService.deleteByid(idPlataforma).subscribe({
      next: value => {
        this.plataformas = this.plataformas.filter(plataforma => plataforma.id !== idPlataforma);
        console.log('Plataforma excluída com sucesso!'); // Usando console.log em vez de alert
      },
      error: err => {
        console.error("Erro ao excluir plataforma: ", err); // Usando console.error em vez de alert
      }
    });
  }

}
