import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonDesign!: string;
  @Input() classes!: string;
  @Input() btnText!: string;
  @Input() to!: string;
  @Input() back!: boolean;
  @Input() buttonType!: string;
  @Input() buttonDisabled!: boolean;

  constructor(
    private router: Router,
    private location: Location
  ) {}

  submitHandler() {
    if ( this.to ) {
      this.router.navigate([this.to]);
    } else if ( this.back ) {
      this.location.back();
    }
  }
}
