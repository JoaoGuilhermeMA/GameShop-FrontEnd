import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { AdminComponent } from './components/admin/admin.component';
import { JogoFormComponent } from './components/jogo-form/jogo-form.component';
import { ConsoleFormComponent } from './components/console-form/console-form.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';

export const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'jogo-form', component: JogoFormComponent },
  { path: 'console-form', component: ConsoleFormComponent },
  { path: 'categoria-form', component: CategoriaFormComponent },
  { path: 'endereco-form', component: EnderecoFormComponent },
  { path: 'carrossel', component: CarrosselComponent },
];
