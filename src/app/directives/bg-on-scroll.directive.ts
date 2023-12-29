import { Directive, ElementRef, Renderer2 } from '@angular/core';

import { UiService } from '../services/ui.service';

@Directive({ selector: '[bgOnScroll]' })
export class BgOnScrollDirective {

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
        private uiService: UiService
    ) { }

    ngOnInit() {
        let that = this;
        window.addEventListener('scroll', function() {
            if ( this.scrollY > 100 ) {
                that.renderer.setStyle(that.elRef.nativeElement, 'background-color', '#173A73');
                that.uiService.isNavHasBG_$.next(true);
            } else {
                that.renderer.setStyle(that.elRef.nativeElement, 'background-color', 'transparent');
                that.uiService.isNavHasBG_$.next(false);
            }
        });
    }
    
}