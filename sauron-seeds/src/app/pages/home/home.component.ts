import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
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
  currentIndex: number = 0;
  displayedTestimonials: Testimonial[] = [this.testimonials[this.currentIndex]];

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.displayedTestimonials = [this.testimonials[this.currentIndex]];
  }

  previousTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.displayedTestimonials = [this.testimonials[this.currentIndex]];
  }
  @ViewChild('content') content!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    this.observeContent();
  }

 
  observeContent(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    if (this.content) {
      observer.observe(this.content.nativeElement);
    }
  }
}
