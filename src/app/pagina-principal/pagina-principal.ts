import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MainHeader } from '../components/main-header/main-header';
import { PieDePagina } from '../components/pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-pagina-principal',
  imports: [CommonModule, RouterModule, MainHeader, PieDePagina],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.css',
})
export class PaginaPrincipal implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4]; // 5 slides
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateCarousel();
    this.stopAutoPlay();
    this.startAutoPlay(); // Reinicia el autoplay
  }

  updateCarousel() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }
}
