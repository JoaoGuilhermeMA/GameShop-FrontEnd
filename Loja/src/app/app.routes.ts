import { Routes } from '@angular/router';
import { ViewProdutoComponent } from './components/view-produto/view-produto.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'produtos', component: ViewProdutoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'produtos', pathMatch: "full" }
];