import { Component } from '@angular/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-attribute-directives',
  template: `
    <div [myHighlight] ="'red'">
        Highlight me
    </div>
    <br/><br/>
    <div [myHighlight]="'blue'">
        Another Highlight
    </div>
  `,
  directives: [HighlightDirective]
})
export class AttributeDirectives {

}
