import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
import { FooterComponent } from '../../Layout/footer/footer/footer.component';
import { ContentfulService } from '../../services/contentful.service';
import { map, Observable } from 'rxjs';

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
  constructor(private el: ElementRef, private renderer: Renderer2,private contentfulService:ContentfulService) {}

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
  interval: any;

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
  statesData$:Observable<any> | undefined;
  ngOnInit():void{
  //  this.productPost$= this.contentfulService.getAllEntries({ content_type: 'productPost'}).pipe(
  //   map((response: any) => response.items) // Map the response to get only the items array
  // );;

  this.statesData$ = this.contentfulService.getAllEntries({
    content_type: 'statesData', 
  }).pipe(
    map((response: any) => response.items)
  );
  
  }
  countUpOptions = {
    duration: 2,
    useGrouping: true,
    separator: ',',
  };

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('stats-section')) {
            this.animateStatsSection(entry.target as HTMLElement);
          } else if (entry.target.classList.contains('testimonial-section')) {
            this.startAutoCycle();
          } else if (entry.target.classList.contains('why-choose-us-container')) {
            this.animateWhyChooseUsSection(entry.target as HTMLElement);
          }
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger animation when 10% of the element is visible
    });

    const statsSection = document.querySelector('.stats-section');
    const testimonialSection = document.querySelector('.testimonial-section');
    const whyChooseUsSection = document.querySelector('.why-choose-us-container');

    if (statsSection) observer.observe(statsSection);
    if (testimonialSection) observer.observe(testimonialSection);
    if (whyChooseUsSection) observer.observe(whyChooseUsSection);
  }

  animateStatsSection(section: HTMLElement) {
    section.querySelectorAll('.stats-section-content').forEach(content => {
      content.classList.add('animate-in');
    });
  }

  startAutoCycle() {
    this.interval = setInterval(() => {
      this.showNextTestimonial();
    }, 2000);
  }

  showNextTestimonial() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  animateWhyChooseUsSection(section: HTMLElement) {
    // Animate the left and right content and image within the 'Why Choose Us' section
    const leftContent = section.querySelector('.left-content');
    const rightContent = section.querySelector('.right-content');
    const imageBox = section.querySelector('.image-box img');

    if (leftContent) leftContent.classList.add('animate-in-left');
    if (rightContent) rightContent.classList.add('animate-in-right');
    if (imageBox) imageBox.classList.add('animate-in-pop');
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
