import { Component } from '@angular/core';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-view-produto',
  standalone: true,
  imports: [
    CarrosselComponent,
    ProdutoComponent
  ],
  templateUrl: './view-produto.component.html',
  styleUrls: ['./view-produto.component.css']
})
export class ViewProdutoComponent {}
