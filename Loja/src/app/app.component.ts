import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {CadastroComponent} from './components/cadastro/cadastro.component';
import {ProdutoComponent} from './components/produto/produto.component';
import {FooterComponent} from './components/footer/footer.component';
import {AdminComponent} from './components/admin/admin.component';
import {JogoFormComponent} from './components/jogo-form/jogo-form.component';
import {ConsoleFormComponent} from './components/console-form/console-form.component';
import {CategoriaFormComponent} from './components/categoria-form/categoria-form.component';
import {EnderecoFormComponent} from './components/endereco-form/endereco-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    ProdutoComponent,
    FooterComponent,
    AdminComponent,
    JogoFormComponent,
    CategoriaFormComponent,
    ConsoleFormComponent,
    EnderecoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

