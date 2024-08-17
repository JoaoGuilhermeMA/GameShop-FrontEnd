import { Component} from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  public nome = "Jogo Pokémon Scarlet - Nintendo Switch";
  public preco = "R$399,90";
}
