import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  toggleForms(): void {
    const loginForm = document.querySelector('.login-form') as HTMLElement;
    const signupForm = document.querySelector('.signup-form') as HTMLElement;

    if (loginForm && signupForm) {
      loginForm.classList.toggle('hidden');
      signupForm.classList.toggle('flip');
    }
  } 
}
