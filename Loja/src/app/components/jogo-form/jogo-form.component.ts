import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import Swal from 'sweetalert2'
import {JogoService} from "../../services/jogo.service";
import {Jogo} from "../../models/jogo";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoriaService} from "../../services/categoria.service";
import {PlataformaService} from "../../services/plataforma.service";

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

  plataformas: any[] = [];
  categorias: any[] = [];

  jogoService = inject(JogoService);
  categoriaService = inject(CategoriaService);
  plataformaService = inject(PlataformaService);
  router = inject(Router);

  ngOnInit() {
    this.loadPlataformas();
    this.loadCategorias();
  }

  loadPlataformas() {
    this.plataformaService.findAll().subscribe({
      next: plataformas => this.plataformas = plataformas,
      error: err => console.error('Erro ao carregar plataformas', err)
    });
  }

  loadCategorias() {
    this.categoriaService.findAll().subscribe({
      next: categorias => this.categorias = categorias,
      error: err => console.error('Erro ao carregar categorias', err)
    });
  }


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
