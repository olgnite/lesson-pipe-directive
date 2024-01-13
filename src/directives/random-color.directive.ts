import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[randomColor]'
})
export class RandomColorDirective implements AfterViewInit {

    @Input('randomColor')
    public colors!: string[];

    constructor(private element: ElementRef) {
    }
    
    public ngAfterViewInit(): void {
        this.changeColor(this.element);
    }

    private changeColor(el: ElementRef): void {
        setInterval(() => {
            el.nativeElement.style.background = this.colors[Math.floor(Math.random() * this.colors.length)]
        }, 2000)
    }
}