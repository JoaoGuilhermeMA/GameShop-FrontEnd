import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSignUp = false; // Inicialmente mostra o formulário de login

  toggleForms() {
    this.showSignUp = !this.showSignUp; // Alterna entre login e signup
  }
}
