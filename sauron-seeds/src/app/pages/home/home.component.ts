import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
import { FooterComponent } from '../../Layout/footer/footer/footer.component';

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUpModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  trustedFarmers: number = 1500;
  positiveFeedback: number = 98;
  presenceCountries: number = 25;
  uniqueProducts: number = 120; // Example additional counter
  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      message: 'Great quality seeds and excellent customer service!',
      rating: 5
    },
    {
      name: 'Jane Smith',
      message: 'Very reliable and always on time. Highly recommended!',
      rating: 4
    },
    {
      name: 'Samuel Green',
      message: 'Fantastic experience, I trust them for all my farming needs.',
      rating: 5
    },
    {
      name: 'Laura Brown',
      message: 'Good selection of products, but delivery could be faster.',
      rating: 3
    }
  ];
  activeIndex = 0;
  currentIndex: number = 0;
  displayedTestimonials: Testimonial[] = [this.testimonials[this.currentIndex]];

  showNextTestimonial(index: number): void {
    this.activeIndex = (index + 1) % this.testimonials.length;
  }
  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.displayedTestimonials = [this.testimonials[this.currentIndex]];
  }

  previousTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.displayedTestimonials = [this.testimonials[this.currentIndex]];
  }
  @ViewChild('content') content!: ElementRef;
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry?.target);
    
          (entry.target as HTMLElement).classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Adjust based on when you want the animation to trigger
    });

    const sectionContent = document.querySelector('.stats-section .stats-section-content');
    if (sectionContent) {
      observer.observe(sectionContent);
    }
  }
}
