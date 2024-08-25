import { Routes } from '@angular/router';
import { ViewProdutoComponent } from './components/view-produto/view-produto.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { JogoFormComponent } from './components/jogo-form/jogo-form.component';

export const routes: Routes = [
  { path: 'produtos', component: ViewProdutoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent},
  { path: 'endereco', component: EnderecoFormComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'jogos', component: JogoFormComponent},
  { path: '', redirectTo: 'produtos', pathMatch: "full" }
];