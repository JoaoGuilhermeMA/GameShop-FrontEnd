import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import Swal from 'sweetalert2'
import {JogoService} from "../../services/jogo.service";
import {Jogo} from "../../models/jogo";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jogo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jogo-form.component.html',
  styleUrl: './jogo-form.component.css'
})
export class JogoFormComponent {

  @Input("jogo") jogo : Jogo = new Jogo();
  @Output("retorno") retorno = new EventEmitter<any>();

  jogoService = inject(JogoService);
  router = inject(Router);

  findById(id: number) {
    this.jogoService.findById(id).subscribe({
      next: value => {
        this.jogo = value;
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

    this.jogoService.save(this.jogo).subscribe({
      next: mensagem => {
        Swal.fire({
          title: mensagem,
          icon: 'success',
          confirmButtonText: ''
        });
        this.jogoService.updateJogos();
        this.router.navigate(['produto']);
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
