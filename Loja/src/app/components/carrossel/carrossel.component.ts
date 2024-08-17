import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent implements OnInit{
  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const images = document.querySelectorAll<HTMLImageElement>('.imagens img');
      let currentIndex = 0;

      function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }

      images[currentIndex].classList.add('active');
      setInterval(showNextImage, 5500);
    }
  }
}
