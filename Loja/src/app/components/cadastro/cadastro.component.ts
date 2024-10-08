import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Plataforma} from "../../models/plataforma";
import {PlataformaService} from "../../services/plataforma.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {

  @Input("plataforma") plataforma : Plataforma = new Plataforma();
  @Output("retorno") retorno = new EventEmitter<any>();

  plataformaService = inject(PlataformaService);
  router = inject(Router);

  findById(id: number) {
    this.plataformaService.findById(id).subscribe({
      next: value => {
        this.plataforma = value;
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
    this.plataformaService.save(this.plataforma).subscribe({
      next: mensagem => {
        Swal.fire({
          title: mensagem,
          icon: 'success',
          confirmButtonText: ''
        });
        this.plataformaService.updateJogos();
        this.router.navigate(['produtos']);
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
