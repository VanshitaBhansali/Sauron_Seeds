import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,FooterComponent,CommonModule,SidebarComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sauron-seeds';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to top when navigating to a new route
        window.scrollTo(0, 0);
      }
    });
  }

}
