import { Directive, ElementRef } from '@angular/core';

import { UiService } from '../services/ui.service';

@Directive({ selector: '[increaseOnScroll]' })
export class IncreaseOnScrollDirective {

    constructor(
        private elRef: ElementRef,
        private uiService: UiService,
    ) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scrollHandler.bind(this));
    }

    scrollHandler() {
        let isReached = false;
        if ( this.elRef.nativeElement.getBoundingClientRect().top <= 0 ) isReached = true;
        if ( isReached ) this.uiService.isWindowInArea.next(true);
    }
}