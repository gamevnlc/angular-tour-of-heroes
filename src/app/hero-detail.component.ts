import { Component, Input } from '@angular/core';
import { Hero } from './hero';



@Component({
    selector: 'app-hero-detail',
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}
