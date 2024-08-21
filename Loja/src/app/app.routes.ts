import { Routes } from '@angular/router';
import { ViewProdutoComponent } from './components/view-produto/view-produto.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ConsoleFormComponent } from './components/console-form/console-form.component';

export const routes: Routes = [
  { path: '', component: ViewProdutoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent},
  { path: 'console', component: ConsoleFormComponent},
  { path: '**', redirectTo: '' }
];
