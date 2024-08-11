import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/produto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent , LoginComponent , CadastroComponent , ProdutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

