import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted', form.value);
      // Handle form submission logic here
    } else {
      console.error('Form is invalid');
    }
  }
}
