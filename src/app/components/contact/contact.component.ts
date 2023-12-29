import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm!: FormGroup;
  isDropdownOpened!: boolean;

  ngOnInit() {
    this.contactForm = new FormGroup({
      'category': new FormControl('Angular'),
      'fullName': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
  }

  submitHandler() {
    console.log(this.contactForm.value);
  }
}
