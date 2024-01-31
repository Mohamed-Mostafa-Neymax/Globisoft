import { Component } from '@angular/core';

import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang!: string;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.lang_$.subscribe(lang => this.lang = lang);
  }
}
