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
  // Variável de estado para controlar o deslocamento da imagem
  private imageOffset: number = 0; // 0 = posição original, 1 = movido para a esquerda, 2 = movido para a direita

  // Método para alternar o deslocamento da imagem
  resetImageMargin(): void {
    const imageElement = document.querySelector('.overlay-image') as HTMLImageElement;
    if (imageElement) {
      switch (this.imageOffset) {
        case 0:
          // Move a imagem 31em para a esquerda
          imageElement.style.transform = 'translateX(-32em)';
          this.imageOffset = 1; // Atualiza o estado para movido para a esquerda
          break;
        case 1:
          // Move a imagem 31em para a direita
          imageElement.style.transform = 'translateX(0)';
          this.imageOffset = 2; // Atualiza o estado para movido para a direita
          break;
        case 2:
          // Move a imagem 31em para a esquerda
          imageElement.style.transform = 'translateX(-32em)';
          this.imageOffset = 1; // Atualiza o estado para movido para a esquerda
          break;
      }
    }
  }
}
