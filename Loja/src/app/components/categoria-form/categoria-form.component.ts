import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import Swal from "sweetalert2";
import {Jogo} from "../../models/jogo";
import {JogoService} from "../../services/jogo.service";
import {Router} from "@angular/router";
import {Categoria} from "../../models/categoria";
import {CategoriaService} from "../../services/categoria.service";

@Component({
  selector: 'app-categoria-form',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent {

  @Input("categoria") categoria : Categoria = new Categoria();
  @Output("retorno") retorno = new EventEmitter<any>();

  categoriaService = inject(CategoriaService);
  router = inject(Router);

  findById(id: number) {
    this.categoriaService.findById(id).subscribe({
      next: value => {
        this.categoria = value;
      },
      error: err => {
        Swal.fire({
          title: 'Error!',
          text: 'Jogo não existente!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  save(){

    this.categoriaService.save(this.categoria).subscribe({
      next: mensagem => {
        Swal.fire({
          title: mensagem,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.categoriaService.updateJogos();
        this.router.navigate(['admin']);
        this.retorno.emit();
      },
      error: err => {
        Swal.fire({
          title: err,
          icon: 'error',
          confirmButtonText: 'Entendi'
        })
      }
    })

  }
}
