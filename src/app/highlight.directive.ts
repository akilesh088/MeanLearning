import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // selector: '[appHighlight]',
  // selector:'[appDelay]',
  selector: '[appUnless]'
  
})
export class HighlightDirective {

  // constructor(private el:ElementRef) {}

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }



  // @Input() set appDelay(time:number){
  //   setTimeout(()=>{
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   },time)
  // }
  // constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef){}


  
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


  

}
