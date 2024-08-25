import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Jogo} from "../../models/jogo";
import {CommonModule} from "@angular/common";
import {JogoService} from "../../services/jogo.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  public nome = "Jogo Pokémon Scarlet - Nintendo Switch";
  public preco = "R$399,90";

  @Input("jogo") jogo : Jogo = new Jogo();
  @Output("retorno") retorno = new EventEmitter<any>();

  jogos: Jogo[] = [];
  jogoService = inject(JogoService);

  constructor() {
    this.findAll();
  }

  findAll(){
    this.jogoService.findAll().subscribe({
      next: value => {
        console.log(value);
        this.jogos = value;
      },
      error: err => {
        alert("Erro ao mostrar dados: "+ err)
      }
    })
  }

  ngOnInit() {
    this.jogoService.jogos$.subscribe({
      next: jogos => this.jogos = jogos,
      error: err => console.error('Erro ao atualizar jogos', err)
    });
    this.jogoService.updateJogos(); // Carregar os jogos na inicialização
  }
}
