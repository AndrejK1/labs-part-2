import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { Post } from '../app.component';


@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Input() post: Post;

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick() {
    console.log(this.post.title)
    alert(this.post.title)
  }
}
