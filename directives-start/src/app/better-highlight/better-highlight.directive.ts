import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('class') class: string;

  

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 
    //   'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 
    //     'color', 'white');
    // this.renderer.addClass(this.elRef.nativeElement,
    //   'info')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    /*this.renderer.setStyle(this.elRef.nativeElement, 
      'background-color', 'blue');*/
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 
        'color', 'white');
    /*this.renderer.addClass(this.elRef.nativeElement,
      'info')*/
    this.class = 'info';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    /*this.renderer.setStyle(this.elRef.nativeElement, 
      'background-color', 'transparent');*/
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 
        'color', 'black');
    /*this.renderer.removeClass(this.elRef.nativeElement,
      'info')*/
    this.class = '';
  }

}
