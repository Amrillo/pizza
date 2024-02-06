import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolProjectDirective implements OnInit {

  constructor(private el:ElementRef,
            private rend: Renderer2) {

  }

  @Input() coolInputDefaultBgcolor:string  = 'white' 
  @Input() coolInputFocusBgcolor:string  = 'orange' 


  private _isOnFocus : boolean = false; 
  @HostBinding('class.isOnFocus')
  get getIsonFocus() {  
    return this._isOnFocus ; 
  }


  private _backgroundColor: string = "";  
  @HostBinding('style.backgroundColor')
  get getBgcolor() {  
    return this._backgroundColor; 
  }


  @HostListener('focus')
  onFocus() {  
    this.changeElemBgColor(this.coolInputFocusBgcolor)
    this._isOnFocus = true; 
  }

  @HostListener('blur')
  onBlur() {  
     this.changeElemBgColor(this.coolInputDefaultBgcolor)
     this._isOnFocus = false;
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {  
    console.log(event)
    console.log(target)
  }

  ngOnInit() {
      this.rend.setStyle( this.el.nativeElement , 'backgroundColor' ,this.coolInputDefaultBgcolor);
      this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*');

      // const text = this.rend.createElement('span');

      // this.rend.setProperty(text, 'innerText', '*Obyazatelnoye polya');
      // this.rend.setStyle(text, 'color', 'red');
      // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement))
  }

  changeElemBgColor(color: string) {  

      this._backgroundColor = color;  
    // this.rend.setStyle(this.el.nativeElement , 'backgroundColor' , color);
  }
}
