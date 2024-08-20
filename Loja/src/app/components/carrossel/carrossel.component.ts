import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'] // Correção: styleUrls em vez de styleUrl
})
export class CarrosselComponent implements OnInit {
  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const images = document.querySelectorAll<HTMLImageElement>('.imagens img');
      const dots = document.querySelectorAll<HTMLSpanElement>('.dot');
      let currentIndex = 0;

      function showImage(index: number) {
        images[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].classList.add('active');
        updateDots(currentIndex);
      }

      function updateDots(index: number) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
      }

      function showNextImage() {
        showImage((currentIndex + 1) % images.length);
      }

      function showPreviousImage() {
        showImage((currentIndex - 1 + images.length) % images.length);
      }

      document.querySelector('.arrow.right')?.addEventListener('click', showNextImage);
      document.querySelector('.arrow.left')?.addEventListener('click', showPreviousImage);

      images[currentIndex].classList.add('active');
      updateDots(currentIndex);
      setInterval(showNextImage, 5500);
    }
  }
}
