import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent , LoginComponent , CadastroComponent , ProdutoComponent , FooterComponent , CarrosselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

