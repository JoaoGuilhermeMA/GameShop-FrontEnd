import { Component} from '@angular/core';
import {Jogo} from "../../models/jogo";
import {CommonModule} from "@angular/common";

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

  jogos: Jogo[] = [];

  constructor() {
  }
}
