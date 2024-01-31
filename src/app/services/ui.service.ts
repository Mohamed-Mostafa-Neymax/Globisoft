import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    isNavHasBG_$ = new BehaviorSubject<boolean>(false);
    isWindowInArea = new Subject<boolean>();
    lang: string | null = localStorage.getItem('lang');
    lang_$ = new BehaviorSubject<string>(this.lang ? this.lang : 'en');
}