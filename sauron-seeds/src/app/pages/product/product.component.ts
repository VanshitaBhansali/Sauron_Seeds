import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
interface Testimonial {
  name: string;
  message: string;
  rating: number;
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,CountUpModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    { title: 'High Quality', description: 'Our products are made from the highest quality materials.' },
    { title: 'Trustworthy', description: 'We guarantee the trustworthiness of our products.' },
    { title: 'Sustainable', description: 'Sustainability is at the heart of our production process.' },
    { title: 'Innovative', description: 'Innovation drives our products and solutions.' }
  ];
  seeds = [
    { title: 'Cereal Seeds', description: 'High-quality cereal seeds that ensure great yield and adaptability across diverse climates.' },
    { title: 'Pulses Seeds', description: 'Top-quality pulses seeds known for their growth efficiency and robust nutritional value.' },
    { title: 'Oil Seeds', description: 'Premium oil seeds for enhanced oil extraction and rich nutrient content.' },
    { title: 'Vegetable Seeds', description: 'Superior vegetable seeds with excellent growth potential and disease resistance.' }
  ];
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
  trustedFarmers: number = 1500;

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
 
}
