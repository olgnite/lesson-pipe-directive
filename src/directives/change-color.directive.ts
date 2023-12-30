import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[changeColor]'
})
export class ChangeColorDirective {

    constructor(private _element: ElementRef) {
        console.log(this._element);
    }

    @HostListener('mouseenter')
    public onMouseEnter(): void {
        this.changeColor('black');
    }

    @HostListener('mouseleave')
    public onMouseLeave(): void {
        this.changeColor('red');
    }

    public changeColor(color: string): void {
        this._element.nativeElement.style.background = color;
    }
}