import { Component, Input, Output, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input()  screenWidth = 0;

  getBodyClass(): string{
    let styleClass ='';
    if(this.collapsed && this.screenWidth> 768){
      styleClass = 'bode-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }
}
